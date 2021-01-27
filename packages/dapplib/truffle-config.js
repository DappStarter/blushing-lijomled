require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember minor heavy kiwi force slogan'; 
let testAccounts = [
"0x542cb7b68908d09f75ea39c36b71804f6f9edfdc5a52e59a97a19d58eded0a0e",
"0x7ede3e47e323195275800dedf8eb387d55994ecbd2773bd3a90489a2c9b7f2f0",
"0xa065afbdacde56e13d1b5881a6984752a80487b2808122d56e8a0c1ebbade7f6",
"0x48154b2f90a46d6dc16990274e580b1872b05a8cef9b1ff62a62088c9aded33a",
"0x67c82fbcc68e3fc53975aeada299c573d5a1074a0564c2092b738024e1752d5d",
"0x216f9aadf4f32dca12686e9672d935b643031e12b909f032071c6ab5cfce74b4",
"0x3aff94d5c0c73f7d4ef23cd2f85b2c897850abf8ba27e5d659df31ed752b395c",
"0xdf0d3304c0e30ed8b1e835de139a8a3df5c796fa5a9893ecfc6587d1dbc41abf",
"0x943a035828b8c9edb3f950aed3965be07a50e12bba03afcdc17b59b4f320ab10",
"0x6303ed451d6099d302f1ee27240171b8ea2825de216a1ab7e58ef18bf67c9d73"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
