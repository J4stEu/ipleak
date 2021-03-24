from app import application
from flask import request, jsonify
import requests

class userToIdentify(object):
    def __init__(self, request):
        self.ip = '31.134.190.211'#request.environ['REMOTE_ADDR']
        self.headers = dict(request.headers)
        self.getDataByIpToken = '181fe8ffed4c9a'
        self.ipData = None
        self.proxyHeaders = ['CLIENT_IP','FORWARDED','FORWARDED_FOR',
                            'FORWARDED_FOR_IP','VIA','X_FORWARDED',
                            'X_FORWARDED_FOR','HTTP_CLIENT_IP','HTTP_FORWARDED',
                            'HTTP_FORWARDED_FOR','HTTP_FORWARDED_FOR_IP','HTTP_PROXY_CONNECTION',
                            'HTTP_VIA','HTTP_X_FORWARDED','HTTP_X_FORWARDED_FOR']

        self.proxy = {'isProxy': False, 'proxyHeaders':[], 'realIp': False, 'realIpInfo': False}
        self.VPN = {'isVPN': 'If you are now connected to a VPN and between the detected DNS you see your ISP DNS, then your system is leaking DNS requests'}
        self.TOR = False

    def dtData(self):
        self.ipData = requests.get('https://ipinfo.io/' + self.ip + '?token=' + self.getDataByIpToken)
        return self.ipData.json()

    def dtProxy(self):
        for key in self.proxyHeaders:
            if (key in self.headers):
                self.proxy['isProxy'] = True
                self.proxy['proxyHeaders'].append(key)
        if ('HTTP_X_FORWARDED_FOR' in self.headers):
            self.proxy['realIp'] = request.environ['HTTP_X_FORWARDED_FOR']
            self.proxy['realIpInfo'] = requests.get('https://ipinfo.io/' + self.proxy['realIp'] + '?token=' + self.getDataByIpToken).json()
        return self.proxy
    
    def getTorExitNodes(self):
        with open('files/tor-exit-nodes.txt') as nodes:
            torExitNodes = nodes.read().splitlines()
        return jsonify(torExitNodes)

    def dtTOR(self):
        if (self.ip in self.getTorExitNodes()):
            self.TOR = True
        return self.TOR

    def dataPack(self):
        return jsonify({'userData': self.dtData(), 'userProxy': self.dtProxy(), 'userVPN': self.VPN, 'userTOR': self.TOR})

#get user data by ip
@application.route('/api/user_ip_data')#, methods = ['GET'])
def user_ip_data():
    user = userToIdentify(request)
    return user.dataPack(), 200