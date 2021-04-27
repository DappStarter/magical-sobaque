require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth soap unable gesture merry flock gift'; 
let testAccounts = [
"0xd153ce0b590485a0d02c5595acccff639deb89f5e079b70ddf1acd445138347b",
"0xb164983d517f254ddc8846167bc09069742a32c8843bea9fc94edf4712325960",
"0xd5b7c5326b9e4770f5f6e0f5d4f8c6d7b5d4c9cf16116d717a72db33232bd40c",
"0xccad8cc13e8a181133221c262ae668c1435197db9dc845bd27e46b2f02142cd9",
"0x5f823604378a856fea78a7959a16d40eea95be5f5d6fe95684e10414db557938",
"0x0a8848aeeeed9f732bc3659a84e68f75db5b0005c6453bb9979fb14a153d1a42",
"0x9336a75dc2ef7d58b9dbf058c4f098d59362e8651768495502be7e8017e7428b",
"0x87bc0e4e6d675571394b1d69123f089a3079702e23987ad4bad23b73a8d957f0",
"0x1c23326aa70e4ca9ad19f1a37c0ed2beb8335534ce7b69455a6478ab5aae97d1",
"0xb9ae6ced1e347139490c4518f2f2bb6f3601e0e6766a3b9d95b30626d2d5189c"
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
