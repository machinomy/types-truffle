declare module 'truffle-resolver' {
    import truffleContract from 'truffle-contract'

    namespace Resolver {
    }

    interface ResolverOptions {
        working_directory: string
        contracts_build_directory?: string
    }

    class Resolver {
        constructor(options: ResolverOptions)
        require <A> (name: string): truffleContract.TruffleContract<A>
    }

    export = Resolver
}
