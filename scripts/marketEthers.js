/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const baseTokenAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{ "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }]`;
};

const marketAddressMainnet = "0xD60917e1ABDe5c9e3395cfbA5688c735a89B3281";
const marketAddressPolygon = "0x03923b329d01cb060461d455E087Cc7A11524EBf";
const marketAddressArbitrum = "0xeAfA25e962ee875F75FdC97E152D39BB4C8978Ae";
const marketAddressTestnet = "0x9D82e4140A798FB261eA1fE315f0A2c723D192d0";
const marketAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"stuckOwner_","type":"address"},{"indexed":false,"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"GovernorUnstuckOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"string","name":"title_","type":"string"},{"indexed":false,"internalType":"string","name":"imageUri_","type":"string"},{"indexed":false,"internalType":"string","name":"projectUri_","type":"string"},{"indexed":false,"internalType":"string","name":"description_","type":"string"},{"indexed":false,"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"deadline_","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"price_","type":"uint256"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"collector_","type":"address"}],"name":"G_setRegistrationCollector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"G_setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver_","type":"address"}],"name":"G_withdrawMESfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"SG_SetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"SG_SetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"SG_SetStuckOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"title_","type":"string"},{"internalType":"string","name":"imageUri_","type":"string"},{"internalType":"string","name":"projectUri_","type":"string"},{"internalType":"string","name":"description_","type":"string"},{"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"internalType":"uint32","name":"deadline_","type":"uint32"},{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToMESRegistry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationCollector","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"superGovernor_","type":"address"}],"name":"setSuperGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superGovernorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const baseTokenAbi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const marketAddress = "0x9D82e4140A798FB261eA1fE315f0A2c723D192d0";
// const marketAbi = () => {
//     return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"string","name":"title_","type":"string"},{"indexed":false,"internalType":"string","name":"imageUri_","type":"string"},{"indexed":false,"internalType":"string","name":"projectUri_","type":"string"},{"indexed":false,"internalType":"string","name":"description_","type":"string"},{"indexed":false,"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"deadline_","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"price_","type":"uint256"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"title_","type":"string"},{"internalType":"string","name":"imageUri_","type":"string"},{"internalType":"string","name":"projectUri_","type":"string"},{"internalType":"string","name":"description_","type":"string"},{"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"internalType":"uint32","name":"deadline_","type":"uint32"},{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ownerSetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"ownerSetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to browse listings!');
}

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// Initiate Contracts
let market;
let marketAddress;

const setMarket = async() => {
    let currentChain = await getChainId();
    if (currentChain == 1) {
        marketAddress = marketAddressMainnet;
    }
    else if (currentChain == 4) {
        marketAddress = marketAddressTestnet;
    }
    else if (currentChain == 42161) {
        marketAddress = marketAddressArbitrum;
    }
    else if (currentChain == 137) {
        marketAddress = marketAddressPolygon;
    }
    market = new ethers.Contract(marketAddress, marketAbi(), signer);
}

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const loadingDiv = `<div id="ex1" class="partner-collection example">
                        <div class="cover">
                            <button class="button" onclick="connect()">LOADING<span class="one">.</span><span class="two">.</span><span class="three">.</span></button>
                        </div>
                        <img class="collection-img" src="./images/question.jpeg">
                        <div class="collection-info">
                            <h3>???</h3>
                            <h4>???/??? Purchased
                            <br>
                            ??? $TOKEN
                            <br>
                            <span class="end-time">Ends MM/DD/YYYY HH:MM AM</span>
                            </h4>
                            <div class="inside-text collection-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare neque ut aliquam lobortis. Morbi non tellus dui. Proin pellentesque nisl non augue volutpat, eu convallis nibh pretium.
                            </div>
                            <button class="button">PURCHASE</button>
                        </div>
                    </div>`

// Approval Functions

var currentTokenAddress;
var currentTokenImageURI;

const selectProject = async(address) => {
    if (address) {
        $("#approval-button").html(`Approve`);
        $("#scroll-indicator").addClass("hidden");
        $("#token-balance").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
        await checkTokenApproval();
        $("#live-collections").empty();
        $("#past-collections").empty();
        $("#live-collections").append(loadingDiv);
        $("#past-collections").append(loadingDiv);
        $("#num-live").html(`<br>(<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
        $("#num-past").html(`<br>(<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
        let projectInfo = await market.contractToProjectInfo(address);
        currentTokenAddress = address;
        currentTokenImageURI = (projectInfo.tokenImageUri).includes("https://") ? projectInfo.tokenImageUri : `https://${projectInfo.tokenImageUri}`;

        await checkTokenApproval();
        await loadCollections();
        await updateTokenBalance();

        if ($("#live-button").hasClass("active")) {
            showLive();
        }
        else {
            showPast();
        }
    }
}

const approveTokenToMarket = async() => {
    const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
    await token.approve(marketAddress, maxInt).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkTokenApproval = async() => {
    if (currentTokenAddress) {
        const userAddress = await getAddress();
        const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
    
        if (Number(await token.allowance(userAddress, marketAddress)) >= maxInt) {
            $("#approval").addClass("hidden");
        }
        else {
            $("#approval").removeClass("hidden");
        }
    }
};

const updateTokenBalance = async() => {
    if (currentTokenAddress) {
        const userAddress = await getAddress();
        const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
        let balance = Number(formatEther((await token.balanceOf(userAddress)))).toFixed(1);
        $("#token-balance").html(`${balance} <img src="${currentTokenImageURI}" class="token-icon">`);
    }
}

const purchase = async(tokenAddress, id) => {
    try {
        if (!discordSet) {
            await displayErrorMessage("Error: Must set Discord ID to associate with purchases!")
            await promptForDiscord();
        }
        else {
            await market.purchaseWLVendingItem(tokenAddress, id).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("Already purchased")) {
            await displayErrorMessage(`Error: You already purchased a slot!`);
        }
        else if ((error.message).includes("This WLVendingItem does not exist!")) {
            await displayErrorMessage(`Error: Item does not exist!`);
        }
        else if ((error.message).includes("No more WL remaining")) {
            await displayErrorMessage(`Error: No spots left!`);
        }
        else if ((error.message).includes("Passed deadline")) {
            await displayErrorMessage(`Error: Listing expired!`);
        }
        else if ((error.message).includes("Not enough tokens")) {
            await displayErrorMessage(`Error: Not enough tokens!`);
        }
        else if ((error.message).includes("transfer amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market not approved to spend token!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

var loadedCollections = false;

const splitArrayToChunks = (array_, chunkSize_) => {
    let _arrays = Array(Math.ceil(array_.length / chunkSize_))
    .fill()
    .map((_, index) => index * chunkSize_)
    .map((begin) => array_.slice(begin, begin + chunkSize_));

    return _arrays;
};

const loadCollections = async() => {
    if (!currentTokenAddress) return;
    loadedCollections = false;

    const userAddress = await getAddress();
    const numCollections = Number( await market.getWLVendingItemsLength(currentTokenAddress) );
    let allItems;
    if (numCollections > 0) {
        allItems = await market.getWLVendingItemsPaginated( currentTokenAddress, 0, numCollections - 1);
    }
    else {
        allItems = [];
    }
    let allItemIds = Array.from(Array(numCollections).keys());
    const chunks = splitArrayToChunks(allItemIds, 5);
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    let idToLiveJSX = new Map();
    let idToPastJSX = new Map();
    for (const chunk of chunks) {
        await Promise.all( chunk.map( async(id) => {
            // WL data from contract
            let WLinfo = allItems[id];
            let collectionPrice = Number(formatEther(WLinfo.price));
            let purchased = await market.contractToWLPurchased(currentTokenAddress, id, userAddress);

            // Data from JSON file
            let maxSlots = WLinfo.amountAvailable;
            let minted = WLinfo.amountPurchased;
            let valid = WLinfo.deadline > (Date.now()/1000);
            let imageUri = (WLinfo.imageUri).includes("https://") ? WLinfo.imageUri : `https://${WLinfo.imageUri}`;
            let projectUri = (WLinfo.projectUri).includes("https://") ? WLinfo.projectUri : `https://${WLinfo.projectUri}`;

            if (minted != maxSlots && valid) {
                numLive += 1;
                let button;
                if (purchased) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED!</button>`;
                }
                else {
                    button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="purchase('${currentTokenAddress}', ${id})">PURCHASE</button>`;
                }
                let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                <h4><span class="end-time">Ends ${(new Date(WLinfo.deadline*1000)).toLocaleDateString()} ${(new Date(WLinfo.deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span></h4>
                                <img class="collection-img" src="${imageUri}">
                                <div class="collection-info">
                                    <h3><a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;">${WLinfo.title}⬈</a></h3>
                                    <h4>${collectionPrice} <img src="${currentTokenImageURI}" class="token-icon">
                                    <br>
                                    <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased
                                    </h4>
                                    <div class="inside-text collection-description">
                                    ${(WLinfo.description).replaceAll("\n", "<br>")}
                                    </div>
                                </div>
                                ${button}
                                </div>`

                idToLiveJSX.set(id, fakeJSX);
            }
            else {
                numPast +=1;
                let button;
                if (purchased) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED!</button>`;
                }
                else if (!valid) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">EXPIRED</button>`;
                }
                else if (minted == maxSlots) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">SOLD OUT</button>`;
                }
                let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                <img class="collection-img" src="${imageUri}">
                                <div class="collection-info">
                                    <h3><a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;">${WLinfo.title}⬈</a></h3>
                                    <h4>${collectionPrice} <img src="${currentTokenImageURI}" class="token-icon"> <br> <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased</h4>
                                    <div class="inside-text collection-description">
                                    ${(WLinfo.description).replaceAll("\n", "<br>")}
                                    </div>
                                </div>
                                ${button}
                                </div>`

                idToPastJSX.set(id, fakeJSX);
            }
        }));
    }

    let liveIds = Array.from(idToLiveJSX.keys()).map(Number).sort(function(a, b){return b-a});
    let pastIds = Array.from(idToPastJSX.keys()).map(Number).sort(function(a, b){return b-a});
    for (const liveId of liveIds) {
        liveJSX += idToLiveJSX.get(liveId);
    }
    for (const pastId of pastIds) {
        pastJSX += idToPastJSX.get(pastId);
    }
    
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(liveJSX);
    $("#past-collections").append(pastJSX);
    $("#num-live").html(`<br>(${numLive})`);
    $("#num-past").html(`<br>(${numPast})`);
    loadedCollections = true;
}

const updateSupplies = async() => {
    let userAddress = await getAddress();
    let numListings = Number(await market.getWLVendingItemsLength(currentTokenAddress));
    for (let id = 0; id < numListings; id++) {
        let buyers = await market.getWLPurchasersOf(currentTokenAddress, id);
        let WLinfo = await market.contractToWLVendingItems(currentTokenAddress, id);
        let maxSlots = WLinfo.amountAvailable;
        let minted = WLinfo.amountPurchased;
        let purchased = buyers.includes(userAddress);
        if (purchased) {
            $(`#${id}-mint-button`).text("PURCHASED");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        else if (minted == maxSlots ) {
            $(`#${id}-mint-button`).text("SOLD OUT");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        $(`#${id}-supply`).text(minted);
    }
}

const loadPartnerCollections = async() => {
    let collections = await market.getAllEnabledContracts();
    let fakeJSX = "";
    for (let i = 0; i < collections.length; i++) {
        let address = collections[i];
        let projectInfo = await market.contractToProjectInfo(address);
        fakeJSX += `<option value="${address}">${projectInfo.projectName}</option>`;
    }
    $("#wl-select").append(fakeJSX);
}

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("MartianMarketPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("MartianMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MartianMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateSupplies();
    }
}

var chainLogoSet = false;

const setChainLogo = async() => {
    let chainLogo = "";
    let chain = await getChainId();
    if (chain == 1 || chain == 4) {
        chainLogo = "<img src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/eth.png?raw=true' class='token-icon'>";
    }
    else if (chain == 42161) {
        chainLogo = "<img src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/arbitrum.png?raw=true' class='token-icon'>";
    }
    else if (chain == 137) {
        chainLogo = "<img src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/polygon.png?raw=true' class='token-icon'>";
    }
    chainLogoSet = true;
    $("#account-chain-logo").html(chainLogo);
    $("#mobile-account-chain-logo").html(chainLogo);
}

const updateInfo = async () => {
    await checkTokenApproval();
    let userAddress = await getAddress();
    $("#account-text").html(`${userAddress.substr(0,7)}..`);
    $("#account").addClass(`connected`);
    $("#mobile-account-text").html(`${userAddress.substr(0,7)}..`);
    if (!chainLogoSet) {
        await setChainLogo();
    }
};

setInterval( async() => {
    await updateInfo();
    await updateTokenBalance();
    if (loadedCollections) {
        await updateSupplies();
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

window.onload = async() => {
    await setMarket();
    if (!(await getAddress())) {
        const connectPrompt = ` <div id="ex1" class="partner-collection example">
                                    <div class="cover">
                                        <button class="button" onclick="connect()">CONNECT WALLET TO VIEW LISTINGS</button>
                                    </div>
                                    <img class="collection-img" src="./images/question.jpeg">
                                    <div class="collection-info">
                                        <h3>???</h3>
                                        <h4>???/??? Purchased
                                        <br>
                                        ??? $TOKEN
                                        <br>
                                        Ends MM/DD/YYYY
                                        </h4>
                                       <div class="inside-text collection-description">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit augue, ultrices aliquam ante. Duis sodales eros consequat magna efficitur, non ullamcorper mauris tristique.
                                        </div>
                                        <button class="button">PURCHASE</button>
                                    </div>
                                </div>`
        $("#live-collections").empty();
        $("#past-collections").empty();
        $("#live-collections").append(connectPrompt);
        $("#past-collections").append(connectPrompt);
    }
    await updateInfo();
    await loadPartnerCollections();
    await updateTokenBalance();
};

window.onunload = async()=>{
    cachePendingTransactions();
}