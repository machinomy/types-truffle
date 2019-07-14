declare type Web3 = import('web3')
declare type Resolver = import('truffle-resolver')

declare const web3: Web3
declare const artifacts: Resolver
declare function contract (name: string, callback: (accounts: Array<string>) => void): void
