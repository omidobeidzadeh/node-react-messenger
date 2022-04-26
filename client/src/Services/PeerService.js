import Peer from 'peerjs'
import ClientService from './ClientService'

class PeerService {
    constructor() {
        this.client = new ClientService
        this.peer = new Peer( this.client.getClientId() , {
            port: 9000,
            path: '/messenger',
            host: '/'
        })
        this.connection = null
    }
    connect(clientId) {
        this.connection = this.peer.connect(clientId)
    }
}

export default PeerService;