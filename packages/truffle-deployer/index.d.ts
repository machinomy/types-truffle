declare module 'truffle-deployer' {
    import * as truffle from 'truffle-contract'

    namespace Deployer { }

    class Deployer {
        deploy <A> (contract: truffle.TruffleContract<A>, ...args: Array<any>): Deployer
        link <A, B> (library: truffle.TruffleContract<A>, contract: truffle.TruffleContract<B>): Deployer
        then(f: () => void): Deployer
        network_id: string
    }

    export = Deployer
}
