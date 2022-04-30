/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const baseTokenAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{ "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }]`;
};

const marketAddressMainnet = "0xFD8f4aC172457FD30Df92395BC69d4eF6d92eDd4";
const marketAddressPolygon = "0x0225960D274966524C4Fafe3804386Df0F6B8742";
const marketAddressArbitrum = "0x6c1b3eBd9Eb46679662b2ABDD28325B32C892FEa";
const marketAddressTestnet = "0x07f4de9cDFf4FB65AC00166A1090D5a750FFA25b";
const marketAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"GovernorUnstuckOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"admin_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"MarketAdminManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"token_","type":"address"}],"name":"TokenManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"gifted_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingObject","name":"object_","type":"tuple"}],"name":"WLVendingItemGifted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"purchaser_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingObject","name":"object_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"collector_","type":"address"}],"name":"G_setRegistrationCollector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"G_setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver_","type":"address"}],"name":"G_withdrawMESfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"O_setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setPriceController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"superGovernor_","type":"address"}],"name":"O_setSuperGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setTokenController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"PriceController","outputs":[{"internalType":"contract IPriceController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"SG_SetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"SG_SetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"SG_SetStuckOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TokenController","outputs":[{"internalType":"contract ITokenController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToMESRegistry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToMarketAdminsApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenImageOfContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenNameOfContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenOfContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getFixedPriceOfItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLVendingObject","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingObject","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingObjectsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingObject[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"address","name":"giftedAddress_","type":"address"}],"name":"giftPurchaserAsMarketAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"sender_","type":"address"}],"name":"isContractOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageMarketAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"raw_getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"raw_getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationCollector","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superGovernorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const baseTokenAbi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{ "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }]`;
// };

// const marketAddress = "0x9D82e4140A798FB261eA1fE315f0A2c723D192d0";
// const marketAbi = () => {
//     return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"string","name":"title_","type":"string"},{"indexed":false,"internalType":"string","name":"imageUri_","type":"string"},{"indexed":false,"internalType":"string","name":"projectUri_","type":"string"},{"indexed":false,"internalType":"string","name":"description_","type":"string"},{"indexed":false,"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"deadline_","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"price_","type":"uint256"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"title_","type":"string"},{"internalType":"string","name":"imageUri_","type":"string"},{"internalType":"string","name":"projectUri_","type":"string"},{"internalType":"string","name":"description_","type":"string"},{"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"internalType":"uint32","name":"deadline_","type":"uint32"},{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ownerSetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"ownerSetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser and connect to use workshop!');
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();

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

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

// --- WORKSHOP FUNCTIONS ---

const loadPartnerCollections = async() => {
    let collections = await market.getAllEnabledContracts();
    let userAddress = await getAddress();
    let fakeJSX = "";
    for (let i = 0; i < collections.length; i++) {
        let address = collections[i];
        let approved;
        try {
          approved = await market.isAuthorized(address, userAddress);
        }
        catch {
            approved = false;
        }
        if (approved) {
            let projectInfo = await market.contractToProjectInfo(address);
            fakeJSX += `<option value="${address}">${projectInfo.projectName}</option>`;
            $("#workshop-link").removeClass("hidden");
            $("#mobile-workshop-link").removeClass("hidden");
        }
    }
    $("#wl-select").append(fakeJSX);
}

const generateCreate = async() => {
    let title = $(`#create-input #listing-title`).val();
    let image = $(`#create-input #listing-image`).val();
    let site = ($(`#create-input #listing-site`).val()).includes("https://") ? $(`#create-input #listing-site`).val() : `https://${$(`#create-input #listing-site`).val()}`;
    let description = $(`#create-input #listing-description`).val();
    let amount = Number($(`#create-input #listing-amount`).val());
    let start = (new Date($(`#create-input #listing-start`).val()).valueOf())/1000;
    let deadline = (new Date($(`#create-input #listing-deadline`).val()).valueOf())/1000;
    let price = Number($(`#create-input #listing-price`).val());

    if (start > deadline) {
        await displayErrorMessage("Error: Start time must be before deadline!");
    }
    else {
        $(`#create-template #ex-title`).html(title.toUpperCase());
        $(`#create-template #ex-image`).attr("src", image);
        $(`#create-template #ex-site`).attr("href", site);
        $(`#create-template #ex-description`).html(description.replaceAll("\n", "<br>"));
        $(`#create-template #ex-amount`).html(amount);
        $(`#create-template #ex-remaining`).html(0);
        $(`#create-template #ex-start`).html(`${(new Date(start*1000)).toLocaleDateString()} ${(new Date(start*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#create-template #ex-deadline`).html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#create-template #ex-price`).html(price);
    }
}

const addListing = async() => {
    try {
        let currentProjectAddress = $("#wl-select").val();
        let start = (new Date($(`#create-input #listing-start`).val()).valueOf())/1000;
        let deadline = (new Date($(`#create-input #listing-deadline`).val()).valueOf())/1000;
        if (!currentProjectAddress) {
            await displayErrorMessage("Select a project to add listing!")
        }
        else if (start > deadline) {
            await displayErrorMessage("Error: Start time must be before deadline!");
        }
        else {
            let title = $("#create-input #listing-title").val();
            let image = $("#create-input #listing-image").val();
            let site = ($("#create-input #listing-site").val()).includes("https://") ? $("#create-input #listing-site").val() : `https://${$("#create-input #listing-site").val()}`;
            let description = $("#create-input #listing-description").val();
            let amount = Number($("#create-input #listing-amount").val());
            let price = parseEther($("#create-input #listing-price").val());
            if (!(title && image && (site != null) && (description != null) && amount && start && deadline && price)) {
                await displayErrorMessage("Missing fields!")
            }
            else {
                const gasLimit = await market.estimateGas.addWLVendingItem(currentProjectAddress, [title, image, site, description, amount, 0, start, deadline, price]);
                const newGasLimit = parseInt((gasLimit * 1.15)).toString();
                await market.addWLVendingItem(currentProjectAddress, [title, image, site, description, amount, 0, start, deadline, price], {gasLimit: newGasLimit}).then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
        }
    }
    catch (error) {
        if ((error.message).includes("You are not Authorized for this ERC20 Contract!")) {
            await displayErrorMessage(`You are not authorized to add listings for this ERC20 contract!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(JSON.stringify(error));
            console.log(error);
        }
    }
}

// --- MODIFY FUNCTIONS ---

const loadListings = async(address) => {
    $("#listing-select").empty();
    $("#listing-select").append(`<option disabled selected value="">SELECT LISTING</option>`);
    let fakeJSX = "";
    let listings = await market.raw_getWLVendingItemsAll(address);
    for (let i = 0; i < listings.length; i++) {
        let WLinfo = listings[i];
        // let valid =  WLinfo.deadline > (Date.now()/1000);
        // if (valid) {
        //     fakeJSX += `<option value="${i}">${WLinfo.title}</option>`;
        // }
        fakeJSX += `<option value="${i}">${(WLinfo.title).toUpperCase()}</option>`;
    }
    $("#listing-select").append(fakeJSX);
}

var currentlySelectedContract;

const selectProject = async(address) => {
    if (address) {
        currentlySelectedContract = address;
        let projectInfo = await market.contractToProjectInfo(address);
        let currentTokenImageURI = (projectInfo.tokenImageUri).includes("https://") ? projectInfo.tokenImageUri : `https://${projectInfo.tokenImageUri}`;
        $("#create-template #ex-token").attr("src", currentTokenImageURI);
        $("#modify-template #ex-token").attr("src", currentTokenImageURI);
        await loadListings(address);
    }
}

var currentlySelectedListing;

const selectListing = async(id) => {
    currentlySelectedListing = Number(id);
    let currentlySelectedWLinfo = await market.contractToWLVendingItems(currentlySelectedContract, id);
    let title = currentlySelectedWLinfo.title;
    let image = currentlySelectedWLinfo.imageUri;
    let site = (currentlySelectedWLinfo.projectUri).includes("https://") ? currentlySelectedWLinfo.projectUri : `https://${currentlySelectedWLinfo.projectUri}`;
    let description = currentlySelectedWLinfo.description;
    let amount = currentlySelectedWLinfo.amountAvailable;
    let purchased = currentlySelectedWLinfo.amountPurchased;
    let start = currentlySelectedWLinfo.startTime;
    let deadline = currentlySelectedWLinfo.endTime;
    let price = Number(formatEther(currentlySelectedWLinfo.price));

    $("#modify-template #ex-title").html(title.toUpperCase());
    $("#modify-template #ex-image").attr("src", image);
    $("#modify-template #ex-site").attr("href", site);
    $("#modify-template #ex-description").html(description.replaceAll("\n", "<br>"));
    $("#modify-template #ex-amount").html(amount);
    $("#modify-template #ex-remaining").html(purchased);
    $(`#modify-template #ex-start`).html(`${(new Date(start*1000)).toLocaleDateString()} ${(new Date(start*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    $("#modify-template #ex-deadline").html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    $("#modify-template #ex-price").html(price);
}

const generateModify = async() => {
    let mode = "modify";
    let currentlySelectedWLinfo = await market.contractToWLVendingItems(currentlySelectedContract, currentlySelectedListing);
    let title = $("#modify-input #listing-title").val() ? $("#modify-input #listing-title").val() : currentlySelectedWLinfo.title;
    let image = $("#modify-input #listing-image").val()? $("#modify-input #listing-image").val() : currentlySelectedWLinfo.imageUri;
    let site = $("#modify-input #listing-site").val() ? $("#modify-input #listing-site").val() : currentlySelectedWLinfo.projectUri;
    let siteFormatted = site.includes("https://") ? site : `https://${site}`;
    let description = $("#modify-input #listing-description").val() ? $("#modify-input #listing-description").val() : currentlySelectedWLinfo.description;
    let amount = $("#modify-input #listing-amount").val() ? Number($("#modify-input #listing-amount").val()) : currentlySelectedWLinfo.amountAvailable;
    let purchased = currentlySelectedWLinfo.amountPurchased;
    let start = $("#modify-input #listing-start").val() ? (new Date($(`#modify-input #listing-start`).val()).valueOf())/1000 : currentlySelectedWLinfo.startTime;
    let deadline = $("#modify-input #listing-deadline").val() ? (new Date($(`#modify-input #listing-deadline`).val()).valueOf())/1000 : currentlySelectedWLinfo.endTime;
    let price = $("#modify-input #listing-price").val() ? $("#modify-input #listing-price").val() : Number(formatEther(currentlySelectedWLinfo.price));

    if (start > deadline) {
        await displayErrorMessage("Error: Start time must be before deadline!");
    }
    else {
        $(`#${mode}-template #ex-title`).html(title.toUpperCase());
        $(`#${mode}-template #ex-image`).attr("src", image);
        $(`#${mode}-template #ex-site`).attr("href", siteFormatted);
        $(`#${mode}-template #ex-description`).html(description.replaceAll("\n", "<br>"));
        $(`#${mode}-template #ex-amount`).html(amount);
        $(`#${mode}-template #ex-remaining`).html(purchased);
        $(`#${mode}-template #ex-start`).html(`${(new Date(start*1000)).toLocaleDateString()} ${(new Date(start*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#${mode}-template #ex-deadline`).html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#${mode}-template #ex-price`).html(price);
    }
}

const modifyListing = async() => {
    try {
        let currentlySelectedWLinfo = await market.contractToWLVendingItems(currentlySelectedContract, currentlySelectedListing);
        let title = $("#modify-input #listing-title").val() ? $("#modify-input #listing-title").val() : currentlySelectedWLinfo.title;
        let image = $("#modify-input #listing-image").val()? $("#modify-input #listing-image").val() : currentlySelectedWLinfo.imageUri;
        let site = $("#modify-input #listing-site").val() ? $("#modify-input #listing-site").val() : currentlySelectedWLinfo.projectUri;
        let siteFormatted = site.includes("https://") ? site : `https://${site}`;
        let description = $("#modify-input #listing-description").val() ? $("#modify-input #listing-description").val() : currentlySelectedWLinfo.description;
        let amount = $("#modify-input #listing-amount").val() ? Number($("#modify-input #listing-amount").val()) : currentlySelectedWLinfo.amountAvailable;
        let purchased = currentlySelectedWLinfo.amountPurchased;
        let start = $("#modify-input #listing-start").val() ? (new Date($(`#modify-input #listing-start`).val()).valueOf())/1000 : currentlySelectedWLinfo.startTime;
        let deadline = $("#modify-input #listing-deadline").val() ? (new Date($(`#modify-input #listing-deadline`).val()).valueOf())/1000 : currentlySelectedWLinfo.endTime;
        let price = $("#modify-input #listing-price").val() ? parseEther($("#modify-input #listing-price").val()) : currentlySelectedWLinfo.price;
        if (!(title && image && (site != null) && (description != null) && amount && start && deadline && price && (purchased != null))) {
            await displayErrorMessage("Missing fields!")
        }
        else if (amount < purchased) {
            await displayErrorMessage("Error: Can't have less spots than already sold!")
        }
        else if (start > deadline) {
            await displayErrorMessage("Error: Start time must be before deadline!");
        }
        else {
            const gasLimit = await market.estimateGas.modifyWLVendingItem(currentlySelectedContract, currentlySelectedListing, [title, image, siteFormatted, description, amount, purchased, start, deadline, price]);
            const newGasLimit = parseInt((gasLimit * 1.15)).toString();
            await market.modifyWLVendingItem(currentlySelectedContract, currentlySelectedListing, [title, image, siteFormatted, description, amount, purchased, start, deadline, price], {gasLimit: newGasLimit}).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("You are not Authorized for this ERC20 Contract!")) {
            await displayErrorMessage(`You are not authorized to add listings for this ERC20 Contract!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(JSON.stringify(error));
            console.log(error);
        }
    }
}

// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});


// Processing tx returns
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
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
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
}

setInterval(async()=>{
    await updateInfo();
}, 5000)

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
    let userAddress = await getAddress();
    $("#account-text").html(`${(userAddress.substr(0,7)).toUpperCase()}..`);
    $("#account").addClass(`connected`);
    $("#mobile-account-text").html(`${(userAddress.substr(0,7)).toUpperCase()}..`);
    if (!chainLogoSet) {
        await setChainLogo();
    }
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await setMarket();
    await updateInfo();
    await loadPartnerCollections();
};

window.onunload = async()=>{
    cachePendingTransactions();
}
