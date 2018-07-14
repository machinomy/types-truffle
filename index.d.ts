import * as truffle from 'truffle-contract'

interface ArtifactsGlobal {
    require <A> (name: string): truffle.TruffleContract<A>
}

global {
    declare function contract (name: string, callback: (accounts: Array<string>) => void): void
    declare var artifacts: ArtifactsGlobal
}