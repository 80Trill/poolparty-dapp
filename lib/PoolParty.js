// This ABI contains only function calls that we are concerned with.
// balanceOf()
// decimals()
// name()
// symbol()
// The specific contract address may have other functions, but with this specific abi, these are the only calls we can make.
var ERCTokenABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }
];
var PoolPartyABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "token",
                "type": "address"
            }
        ],
        "name": "reclaimToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nextPoolId",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "contractAddr",
                "type": "address"
            }
        ],
        "name": "reclaimContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "reclaimEther",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pools",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from_",
                "type": "address"
            },
            {
                "name": "value_",
                "type": "uint256"
            },
            {
                "name": "data_",
                "type": "bytes"
            }
        ],
        "name": "tokenFallback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "creator",
                "type": "address"
            }
        ],
        "name": "PoolCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_admins",
                "type": "address[]"
            },
            {
                "name": "_configsUint256",
                "type": "uint256[]"
            },
            {
                "name": "_configsBool",
                "type": "bool[]"
            }
        ],
        "name": "createPool",
        "outputs": [
            {
                "name": "_pool",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
var PoolABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "admins",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "setPoolToOpen",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "swimmers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "totalTokensDistributed",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "adminWeiFee",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "OPTION_UINT256_SIZE",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "reimbursementTotal",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "poolId",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "FEE_PERCENTAGE_DECIMAL_CAP",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "weiRaised",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "setPoolToClosed",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "adminFeePaid",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "invested",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "adminFeePercentageDecimals",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "hasWhitelist",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "adminFeePercentage",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "maxContribution",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "poolPartyAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_min",
                "type": "uint256"
            },
            {
                "name": "_max",
                "type": "uint256"
            }
        ],
        "name": "setMinMaxContribution",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "whitelist",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "setPoolToCancelled",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "maxAllocation",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tokenAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "minContribution",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "feePercentageDivisor",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "adminFeePayoutIsToken",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "swimmersTokensPaid",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "state",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "OPTION_BOOL_SIZE",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "swimmerReimbursements",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_users",
                "type": "address[]"
            }
        ],
        "name": "addAddressesToWhitelist",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "swimmersList",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_admins",
                "type": "address[]"
            },
            {
                "name": "_configsUint256",
                "type": "uint256[]"
            },
            {
                "name": "_configsBool",
                "type": "bool[]"
            },
            {
                "name": "_poolId",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "AdminFeePayout",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "EtherTransferredOut",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "projectReimbursed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Refund",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "ReimbursementClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "TokenAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "TokenRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "TokenClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "PoolIsOpen",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "PoolIsClosed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "PoolIsAwaitingTokens",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "PoolIsCompleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "PoolIsCancelled",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAdminAddressArray",
        "outputs": [
            {
                "name": "_arrayToReturn",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTokenAddressArray",
        "outputs": [
            {
                "name": "_arrayToReturn",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAmountOfTokens",
        "outputs": [
            {
                "name": "_lengthOfTokens",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getSwimmersListArray",
        "outputs": [
            {
                "name": "_arrayToReturn",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAmountOfSwimmers",
        "outputs": [
            {
                "name": "_lengthOfSwimmers",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "refund",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_startIndex",
                "type": "uint256"
            },
            {
                "name": "_numberOfAddresses",
                "type": "uint256"
            }
        ],
        "name": "refundManyAddresses",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "claimAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_startIndex",
                "type": "uint256"
            },
            {
                "name": "_numberOfAddresses",
                "type": "uint256"
            }
        ],
        "name": "claimManyAddresses",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "reimbursement",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "claimReimbursement",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_startIndex",
                "type": "uint256"
            },
            {
                "name": "_numberOfAddresses",
                "type": "uint256"
            }
        ],
        "name": "claimManyReimbursements",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "addToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "removeToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "removeAddressFromWhitelistAndRefund",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "refundAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "projectReimbursement",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newMax",
                "type": "uint256"
            }
        ],
        "name": "setMaxAllocation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_contractAddress",
                "type": "address"
            }
        ],
        "name": "transferWei",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

function Pool(web3, userAccounts, globalsCallback, updateTransactionStatus){

    this.web3 = web3;
    this.PoolEth = web3.eth.contract(PoolABI);
    this.PoolParty = web3.eth.contract(PoolPartyABI);
    this.Token = web3.eth.contract(ERCTokenABI);


    this.poolPartyInstance = this.PoolParty.at('0x73aDf3Ffe3471BA872368383c9C827DA0B2512Ef'); // Change this to update poolparty address
    this.poolInstance;
    this.tokenInstance;

    this.userAccount = userAccounts[0];
    this.globalsCallback = globalsCallback;
    this.updateTransactionStatus = updateTransactionStatus;

    this.userBalance;
    this.ethRaised;
    this.minContribution;
    this.maxContribution;
    this.maxAllocation;
    this.percentageOfCapRaised;
    this.adminFeePercentage;
    this.adminFeePayoutIsToken;
    this.poolState;

    this.tokenAddress;
    this.tokenBalance = {};
    this.tokenBalanceContract = {};
    this.totalTokensUserHasClaimed = {};
    this.tokenName = {};
    this.tokenDecimal = {};
    this.totalTokensDistributed = {};
    this.totalTokensUserCanClaim = {};
    this.totalTokens = {};

    this.totalReimbursement;
    this.totalReimbursementClaimed;
    this.contractBalance;
    this.totalReimbursementAvailable;

    this.globalMethods = [
        "updateUserBalance",
        "updateWeiRaised",
        "updateMinContribution",
        "updateMaxContribution",
        "updateMaxAllocation",
        "updateAdminFeePayoutIsToken",
        "updateAdminFeePercentage",
        "updatePoolState",
        "updateTotalReimbursement",
        "updateTotalReimbursementAvailable",
        "updateTokenAddress",
        "updateContractBalance"
    ];

    this.poolStateNames = [
        'Open',
        'Closed',
        'Awaiting Tokens',
        'Completed',
        'Cancelled'
    ];

    this.currentTransactions = [];
    this.processTransactionHash();
}

method = Pool.prototype;

/**
 * ------------------------------------------------------------------------------------------------
 * Helpers for PoolParty.JS
 * ------------------------------------------------------------------------------------------------
 */

method.newTransactionHash = function(txHash){
    this.currentTransactions.push(txHash);
};

method.processTransactionHash = function(){
    var _this = this;
    _this.processTransactionHashHelper(0,_this.currentTransactions.length, []);
};

method.processTransactionHashHelper = function(index, length, indexesToBeRemoved){
    var _this = this;
    if(index < length){
        _this.web3.eth.getTransactionReceipt(_this.currentTransactions[index].hash, function (error, result) {
            if (!error && result !== null) {
                if (result.status === '0x0') {
                    _this.updateTransactionStatus(false, _this.currentTransactions[index].fail, _this.currentTransactions[index].hash);
                } else {
                    indexesToBeRemoved.push(index);

                    _this.updateTransactionStatus(true, _this.currentTransactions[index].success, _this.currentTransactions[index].hash);
                    _this.updateGlobals(0, function () {
                    });
                    console.log("update globals complete");
                }
            } else {//has not processed, still waiting
            }
            _this.processTransactionHashHelper(++index, length, indexesToBeRemoved);
        });
    }
    else{
        if(indexesToBeRemoved.length > 0){

            for (var i = indexesToBeRemoved.length -1; i >= 0; i--) {
                _this.currentTransactions.splice(indexesToBeRemoved[i], 1);
            }
        }
        else{
        }
        setTimeout(function(){_this.processTransactionHash()}, 2000);
    }
};

/**
 * ------------------------------------------------------------------------------------------------
 * Methods To Update Global Variables
 * ------------------------------------------------------------------------------------------------
 */

// Sets the pool to which function calls are sent to.
// Parameters... address = hex address of the desired pool.
method.setCurrentPool = function(address){
    this.poolInstance = this.PoolEth.at(address);

    this.updateGlobals(0, function () {
    });
    var _this = this;
    setInterval(function(){ _this.updateGlobals(0, function (err, result) {})}, 5000);
};

// Internal Method which is called when a new pool is set etc.
method.updateGlobals = function(index, callback){
    var _this = this;

    this[_this.globalMethods[index]](function (error, result){
        if(!error){
            index++;
            if(index < _this.globalMethods.length){
                _this.updateGlobals(index, callback);
            }
            else{
                if(_this.poolState == 'Completed') {
                    _this.updateTokenGlobals(0, function (error, result) {
                        _this.globalsCallback(_this);
                        callback(null, null);
                    });
                } else {
                    _this.globalsCallback(_this);
                    callback(null, null);
                }
            }
        }
        else{
            callback(error, null);
        }
    });
};

method.updateUserBalance = function(callback){
    var _this = this;
    this.poolInstance.swimmers(this.userAccount, function(error, result){
        if(!error){
            _this.userBalance = this.web3.fromWei(result, 'ether');
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateWeiRaised = function(callback){
    var _this = this;
    this.poolInstance.weiRaised(function(error, result){
        if(!error){
            _this.ethRaised = this.web3.fromWei(result, 'ether');
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateMinContribution = function(callback){
    var _this = this;
    this.poolInstance.minContribution(function(error, result){
        if(!error){
            _this.minContribution = this.web3.fromWei(result, 'ether');
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateMaxContribution = function(callback){
    var _this = this;
    this.poolInstance.maxContribution(function(error, result){
        if(!error){
            _this.maxContribution = this.web3.fromWei(result, 'ether');
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateMaxAllocation = function(callback){
    var _this = this;
    this.poolInstance.maxAllocation(function(error, result){
        if(!error){
            _this.maxAllocation = this.web3.fromWei(result, 'ether');
            _this.percentageOfCapRaised = (_this.ethRaised / _this.maxAllocation) * 100;
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateAdminFeePayoutIsToken = function(callback){
    var _this = this;
    this.poolInstance.adminFeePayoutIsToken(function(error, result){
        if(!error){
            if (result){
                _this.adminFeePayoutIsToken = "Tokens";
            } else{
                _this.adminFeePayoutIsToken = "Ether";
            }
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateAdminFeePercentage = function(callback){
    var _this = this;
    this.poolInstance.adminFeePercentage(function(error, result){
        if(!error){
            var adminFeePercentage = result;

            _this.poolInstance.adminFeePercentageDecimals(function (error, result){
                if(!error){
                    _this.adminFeePercentage = adminFeePercentage / Math.pow(10, result);

                    callback(null, result);

                } else {
                    callback(error, null);
                }

            });
        }
        else {
            callback(error, null);
        }
    });
};

method.updatePoolState = function(callback){
    var _this = this;
    this.poolInstance.state(function(error, result){
        if(!error){
            _this.poolState = _this.poolStateNames[result];
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTotalReimbursement = function(callback){
    var _this = this;
    this.poolInstance.reimbursementTotal(function(error, result){
        if(!error){
            _this.totalReimbursement = _this.web3.fromWei(result, 'ether');
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTotalReimbursementAvailable = function(callback){
    var _this = this;
    this.poolInstance.swimmerReimbursements(this.userAccount, function(error, result){
        if(!error){
            var reimbursementAvailable = (_this.totalReimbursement * _this.userBalance / _this.ethRaised) - (_this.web3.fromWei(result, 'ether'));

            _this.poolInstance.adminFeePaid(_this.userAccount, function (error, result){
                if (!error){
                    if(result){
                        if (reimbursementAvailable < 0) {
                            _this.totalReimbursementAvailable = 0;
                        }

                        else {
                            _this.totalReimbursementAvailable = reimbursementAvailable;
                        }
                    }

                    else {
                        var adminFee = reimbursementAvailable * _this.adminFeePercentage / 100;

                        _this.totalReimbursementAvailable = reimbursementAvailable - adminFee;
                    }

                    callback(null, null);
                }

                else {
                    callback(error, null);
                }
            });
        }

        else{
            callback(error, null);
        }
    });
};

method.updateContractBalance = function(callback){
    var _this = this;

    this.web3.eth.getBalance(this.poolInstance.address, function(error, result){
        if (!error){
            _this.contractBalance = _this.web3.fromWei(result, 'ether');
            _this.totalReimbursementClaimed = _this.totalReimbursement - _this.contractBalance;

            callback(null, result)
        }

        else {
            callback(error, null)
        }
    });
};


method.updateTokenAddress = function(callback){
    var _this = this;
    if(this.poolState == 'Completed') {
        this.poolInstance.getTokenAddressArray(function(error, result){
            if(!error){
                _this.tokenAddress = result;
                callback(null, result);
            }
            else {
                callback(error, null);
            }
        });
    } else{
        _this.tokenAddress = 'There are no tokens set';
        callback(null, null);
    }
};

method.updateTokenGlobals = function(index, callback){
    var _this = this;
    var tokenAddressLocal = _this.tokenAddress[index];
    var tokenInstance = _this.Token.at(tokenAddressLocal);
    this.updateTokenName(tokenInstance, tokenAddressLocal, function (error, result){
        if(!error){
            index++;
            if(index < _this.tokenAddress.length){
                _this.updateTokenGlobals(index, callback);
            }
            else{
                callback(null, null);
            }
        }
        else{
            callback(error, null);
        }
    });
};

method.updateTokenName = function(token, tokenAddress, callback){
    var _this = this;

    token.name(function(error, result){
        if(!error){
            _this.tokenName[tokenAddress] = result;
            _this.updateTokenDecimal(token, tokenAddress, function (error, result){
                callback(null, null);
            });
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTokenDecimal= function(token, tokenAddress, callback){
    var _this = this;

    token.decimals(function(error, result){
        if(!error){
            _this.tokenDecimal[tokenAddress] = result;
            _this.updateTokenBalance(token, tokenAddress, function (error, result){
                callback(null, null);
            });
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTokenBalance = function(token, tokenAddress, callback){
    var _this = this;

    token.balanceOf(_this.userAccount, function(error, result){
        if(!error){
            _this.tokenBalance[tokenAddress] = result / Math.pow(10, _this.tokenDecimal[tokenAddress]);
            _this.updateTokenBalanceContract(token, tokenAddress, function (error, result){
                callback(null, null);
            });
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTokenBalanceContract = function(token, tokenAddress, callback){
    var _this = this;

    token.balanceOf(_this.poolInstance.address, function(error, result){
        if(!error){
            _this.tokenBalanceContract[tokenAddress] = result / Math.pow(10, _this.tokenDecimal[tokenAddress]);
            _this.updateTotalTokensDistributed(token, tokenAddress, function (error, result){
                callback(null, null);
            });
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTotalTokensDistributed = function(token, tokenAddress, callback){
    var _this = this;

    this.poolInstance.totalTokensDistributed(tokenAddress, function(error, result){
        if(!error){
            _this.totalTokensDistributed[tokenAddress] = result / Math.pow(10, _this.tokenDecimal[tokenAddress]);
            _this.totalTokens[tokenAddress] = _this.tokenBalanceContract[tokenAddress] + _this.totalTokensDistributed[tokenAddress];
            _this.updateTotalTokensUserHasClaimed(token, tokenAddress, function (error, result){
                callback(null, null);
            });
        }
        else {
            callback(error, null);
        }
    });
};

method.updateTotalTokensUserHasClaimed = function(token, tokenAddress, callback){
    var _this = this;

    // !!! this is how you access mappings of mappings in solidity/ethjs
    this.poolInstance.swimmersTokensPaid(_this.userAccount, tokenAddress, function(error, result){
        if(!error){
            // This can potentially round numbers due to precision of the bignumber
            _this.totalTokensUserHasClaimed[tokenAddress] = result / Math.pow(10, _this.tokenDecimal[tokenAddress]);

            // Thus this number can be negative if rounding occurs
            var tokensToClaim = ((_this.userBalance / _this.ethRaised * _this.totalTokens[tokenAddress]) - _this.totalTokensUserHasClaimed[tokenAddress]);

            if (tokensToClaim < 0){
                _this.totalTokensUserCanClaim[tokenAddress] = 0;
                callback(null, null);
            } else {

                _this.poolInstance.adminFeePaid(_this.userAccount, function (error, result){

                    if (!error){
                        if(result){
                            _this.totalTokensUserCanClaim[tokenAddress] = tokensToClaim;

                        }else {
                            var adminFee = tokensToClaim * _this.adminFeePercentage / 100;

                            _this.totalTokensUserCanClaim[tokenAddress] = tokensToClaim - adminFee;

                        }

                        callback(null, null);

                    } else {
                        callback(error, null);
                    }
                });
            }
        }
        else {
            callback(error, null);
        }
    });
};

/**
 * ------------------------------------------------------------------------------------------------
 * External Pool methods
 * ------------------------------------------------------------------------------------------------
 */

// Returns the next poolId for this instance of poolparty.
method.nextPoolId = function(callback){
    this.poolPartyInstance.nextPoolId(function(error, result){
        if(!error){
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Returns the hex address corresponding with the pool id entered.
// Parameters: poolId = number that is the unique pool Id
method.getPoolAddress = function(poolId, callback){
    this.poolPartyInstance.pools(poolId, function(error, result){
        if(!error){
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Creates a new pool for with the following configurations.
// Parameters:
//  - adminsArray = Array of hash addresses that will become the administrators
//  - configsArray = Array of integer configurations for the pool
//          The indexes are as follows:
//          - MAX_ALLOCATION
//          - MIN_CONTRIBUTION
//          - MAX_CONTRIBUTION
//          - ADMIN_FEE_PERCENTAGE_DECIMALS
//          - ADMIN_FEE_PERCENTAGE
//  - boolArray = Array of boolean values for the pool
//          The indexes are as follows:
//          - HAS_WHITELIST
//          - ADMIN_FEE_PAYOUT
method.createPool = function(adminsArray, configsArray, boolArray, callback){
    var ethArray = configsArray;
    ethArray[0] = this.web3.toWei(configsArray[0], "ether");
    ethArray[1] = this.web3.toWei(configsArray[1], "ether");
    ethArray[2] = this.web3.toWei(configsArray[2], "ether");

    console.log('The create pool button was pushed for the following values: ');
    console.log('admins array: ' + adminsArray);
    console.log('configurations array: ' + configsArray);
    console.log('boolean array: ' + boolArray);

    this.poolPartyInstance.createPool(adminsArray, ethArray, boolArray, {from: this.userAccount}, function(error, result){
        if(!error){
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Deposits/Sends Ether to the current pool.
// Parameters:
//      - value = The amount of Ether
//      - address = The user being accredited for the deposit
method.sendEther = function(value, address, callback){
    var _this = this;
    var ethValue = this.web3.toWei(value, "ether");
    console.log('The send ether button was pushed for the address: ' + address + ' in the amount of ' + value + ' Ether');

    this.poolInstance.deposit(address, {from: this.userAccount, value: ethValue}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The account " + _this.userAccount + " has successfully deposited " + value + " Ether!",
                fail: "The deposit for " + value + " Ether into " + _this.userAccount + " failed!"
            });

            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Processes a refund for the current user
method.refundEther = function(callback){
    var _this = this;
    console.log('The refund ether button was pushed');

    this.poolInstance.refund({from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The account " + _this.userAccount + " was successfully refunded!",
                fail: "The refund for " + _this.userAccount + " failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Process a reimbursement claim.
// Parameters: address = The address which is processing the reimbursement.
method.claimReimbursement = function (address, callback){
    var _this = this;
    console.log('The reimbursement button was pushed for the address: ' + address);

    this.poolInstance.claimReimbursement(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The account " + _this.userAccount + " has successfully processed a reimbursement!",
                fail: "The reimbursement claim for " + _this.userAccount + " failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Process a reimbursement claim for Everyone.
method.claimAllReimbursement = function (callback){
    var _this = this;
    var addressLimit = 50; // Change this to adjust the batch size

    this.poolInstance.getAmountOfSwimmers(function (error, result) {
        if (!error) {
            for (var i = 0; i < result; i += addressLimit) {
                var numberOfAddresses;
                if (i + addressLimit < result){
                    numberOfAddresses = addressLimit;
                } else {
                    numberOfAddresses = result - i;
                }

                _this.reimbursementAllHelper(i, numberOfAddresses, callback)
            }
        }
        else {
            // Error here means we couldnt get the amount of swimmers correctly
            callback(error, null);
        }
    });
};

// Helper for the claimAllReimbursement method, this calls the claim function on a
// subset of addresses that is determined inside of the claimAllAddresses method.
// Based on the local addressLimit variable
// Paramaters: firstIndex we want to iterate from on the swimmers list
method.reimbursementAllHelper = function (firstIndex, numberOfAddresses, callback){
    var _this = this;
    console.log('The reimbursement all button was pushed to the starting index of: ' + firstIndex + ' and for ' + numberOfAddresses + ' addresses');

    _this.poolInstance.claimManyReimbursements.estimateGas(firstIndex, numberOfAddresses, {from: _this.userAccount}, function (error, result) {
        if(!error && result < 6500000){
            var gasAmount = result + 25000;
            console.log('The amount of gas used is ' + gasAmount);

            _this.poolInstance.claimManyReimbursements(firstIndex, numberOfAddresses, {from: _this.userAccount, gas: gasAmount}, function (error, result) {
                if (!error) {
                    var endIndex = firstIndex + numberOfAddresses - 1;
                    _this.newTransactionHash({
                        hash: result,
                        success: "Reimbursements for index " + firstIndex + " - " + endIndex + " have been distributed!",
                        fail: "Distributing everyone's available reimbursements for indexes " + firstIndex + " - " + endIndex + "has failed!"
                    });
                    callback(null, result);
                }
                else {
                    var endIndex = firstIndex + numberOfAddresses - 1;

                    var newError = {
                        msg: "Distributing everyone's available reimbursements for indexes " + firstIndex + " - " + endIndex + "has failed!",
                        startIndex: firstIndex,
                        numberOfAddress: numberOfAddresses,
                        method: 'reimbursementAllHelper'
                    };

                    callback(newError, null);
                }
            });

        } else {
            callback(error, null);
        }
    });
};

// Claims current available tokens for a given address.
// Parameters: address = The address which is processing the claim.
method.claimAddress = function(address, callback){
    var _this = this;
    console.log('The claim button was pushed for the address: ' + address);

    this.poolInstance.claimAddress(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The account " + _this.userAccount + " has successfully processed a claim!",
                fail: "The token claim for " + _this.userAccount + " failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Claims all available tokens for every user who participated in the pool.
method.claimAllAddresses = function(callback){
    var _this = this;
    var addressLimit = 50; // Change this to adjust the batch size

    this.poolInstance.getAmountOfSwimmers(function (error, result) {
        if (!error) {
            for (var i = 0; i < result; i += addressLimit) {
                var numberOfAddresses;
                if (i + addressLimit < result){
                    numberOfAddresses = addressLimit;
                } else {
                    numberOfAddresses = result - i;
                }

                _this.claimAllHelper(i, numberOfAddresses, callback)
            }
        }
        else {
            // Error here means we couldnt get the amount of swimmers correctly
            callback(error, null);
        }
    });
};

// Helper for the claimAllAddresses method, this calls the claim function on a
// subset of addresses that is determined inside of the claimAllAddresses method.
// Based on the local addressLimit variable
// Parameters: firstIndex we want to iterate from on the swimmers list
method.claimAllHelper = function (firstIndex, numberOfAddresses, callback){
    var _this = this;
    console.log('The claim all button was pushed to the starting index of: ' + firstIndex + ' and for ' + numberOfAddresses + ' addresses');

    _this.poolInstance.claimManyAddresses.estimateGas(firstIndex, numberOfAddresses, {from: _this.userAccount}, function (error, result) {
        if(!error && result < 6500000){
            var gasAmount = result + 25000;
            console.log('The amount of gas used is ' + gasAmount);

            _this.poolInstance.claimManyAddresses(firstIndex, numberOfAddresses, {from: _this.userAccount, gas: gasAmount}, function (error, result) {
                if (!error) {
                    var endIndex = firstIndex + numberOfAddresses - 1;
                    _this.newTransactionHash({
                        hash: result,
                        success: "Tokens for index " + firstIndex + " - " + endIndex + " have been distributed!",
                        fail: "Distributing everyone's available tokens for indexes " + firstIndex + " - " + endIndex + "has failed!"
                    });
                    callback(null, result);
                }
                else {
                    var endIndex = firstIndex + numberOfAddresses - 1;
                    var newError = {
                        msg: "Distributing everyone's available tokens for indexes " + firstIndex + " - " + endIndex + "has failed!",
                        startIndex: firstIndex,
                        numberOfAddress: numberOfAddresses,
                        method: 'claimAllHelper'
                    };

                    callback(newError, null);
                }
            });

        } else {
            callback(error, null);
        }
    });
};

// Adds a token to the list of ERC20 addresses that users can withdraw from.
// Parameters: address = The address of the ERC20 token.
method.addToken = function(address, callback){
    var _this = this;
    console.log('The add token button was pushed for the address: ' + address);

    this.poolInstance.addToken(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The token at address " + address + " has been successfully added!",
                fail: "The token at address " + address + " has not been added!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Removes a token from the list of available tokens.
// Parameters: address = The address of the ERC20 to be removed.
method.removeToken = function(address, callback){
    var _this = this;
    console.log('The remove token button was pushed for the address: ' + address);

    this.poolInstance.removeToken(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The token at address " + address + "has been successfully removed!",
                fail: "The token at address " + address + " has not been removed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Removes a user from the whitelist and refunds them.
// Parameters: address = The user that is to be removed and refunded.
method.removeAddressFromWhitelistAndRefund = function(address, callback){
    var _this = this;
    console.log('The remove address from whitelist and refund button was pushed for the address: ' + address);

    this.poolInstance.removeAddressFromWhitelistAndRefund(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The account " + address + " was successfully removed and refunded from the whitelist!",
                fail: "The account " + address + " was successfully removed and refunded from the whitelist!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Processes a refund for a given address.
// Parameters: address = The address that is being refunded.
method.refundAddress = function(address, callback){
    var _this = this;
    console.log('The refund button was pushed for the address: ' + address);

    this.poolInstance.refundAddress(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The account " + address + " was successfully refunded!",
                fail: "The refund for " + address + " failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Processes a refund for every user who has contributed.
method.refundAll = function(callback){
    var _this = this;
    var addressLimit = 50; // Change this to increase batch size limit

    this.poolInstance.getAmountOfSwimmers(function (error, result) {
        if (!error) {
            for (var i = 0; i < result; i += addressLimit) {
                var numberOfAddresses;
                if (i + addressLimit < result){
                    numberOfAddresses = addressLimit;
                } else {
                    numberOfAddresses = result - i;
                }

                _this.refundAllHelper(i, numberOfAddresses, callback)
            }
        }
        else {
            callback(error, null); // Error here means we couldnt get the amount of swimmers correctly
        }
    });
};

// This is a helper for the refundAll Method, it calls the function on a
// subset of users as splitup by the refundAll method.
// Based on the address Limit defined in refundAll
// Parameters: firstIndex we want to iterate from on the swimmers list
method.refundAllHelper = function (firstIndex, numberOfAddresses, callback){
    var _this = this;
    console.log('The refund all button was pushed to the starting index of: ' + firstIndex + ' and for ' + numberOfAddresses + ' addresses');

    _this.poolInstance.refundManyAddresses.estimateGas(firstIndex, numberOfAddresses, {from: _this.userAccount}, function (error, result) {
        if(!error && result < 6500000){
            var gasAmount = result + 25000;
            console.log('The amount of gas used is ' + gasAmount);

            _this.poolInstance.refundManyAddresses(firstIndex, numberOfAddresses, {from: _this.userAccount, gas: gasAmount}, function (error, result) {
                if (!error) {
                    var endIndex = firstIndex + numberOfAddresses - 1;
                    _this.newTransactionHash({
                        hash: result,
                        success: "Refunds for index " + firstIndex + " - " + endIndex + " have been distributed!",
                        fail: "Distributing everyone's available refunds for indexes " + firstIndex + " - " + endIndex + "has failed!"
                    });
                    callback(null, result);
                }
                else {
                    var endIndex = firstIndex + numberOfAddresses - 1;
                    var newError = {
                        msg: "Distributing everyone's available refunds for indexes " + firstIndex + " - " + endIndex + "has failed!",
                        startIndex: firstIndex,
                        numberOfAddress: numberOfAddresses,
                        method: 'refundAllHelper'
                    };

                    callback(newError, null);
                }
            });

        } else {
            callback(error, null);
        }
    });
};

// Processes a refund for the project, and distributes the refund at a pro-rata rate.
// Parameters: value = The total amount of Ether that is going to be split up.
method.projectReimbursement = function(value, callback){
    var _this = this;
    var ethValue = this.web3.toWei(value, "ether");
    console.log('The project refund button was pushed with the following value: ' + value);

    this.poolInstance.projectReimbursement({from: this.userAccount, value: ethValue}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The users have been refunded " + value + " Ether at a pro-rata rate!",
                fail: "The project refund of " + value + " Ether failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Sets the max allocation of the pool.
// Parameters: value = The new allocation in Ether.
method.setMaxAllocation = function(value, callback){
    var _this = this;
    var ethValue = this.web3.toWei(value, "ether");
    console.log('The cset max allocation button was pushed to the following value: ' + value);

    this.poolInstance.setMaxAllocation(ethValue, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The max allocation of the pool has been set to " + value + " Ether!",
                fail: "The max allocation has not been reset!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Sets the min and max contribution values for the pool.
// Parameters: min/max = The new Ether values to set the pool too.
method.setMinMaxContribution = function(min, max, callback){
    var _this = this;
    var ethValueMin = this.web3.toWei(min, "ether");
    var ethValueMax = this.web3.toWei(max, "ether");
    console.log('The set min max button was pushed with the following values: ' + min + ' and ' + max);

    this.poolInstance.setMinMaxContribution(ethValueMin, ethValueMax, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The min contribution has been set to " + min + " Ether and the max contribution has been set to " + max + " Ether!",
                fail: "Setting the min and max contribution has failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Transfers the Ether out of the pool.
// Parameter: address = The address to which all the Ether in the contract is sent.
method.transferWei = function(address, callback){
    var _this = this;
    console.log('The transferWei button was pushed to the address: ' + address);

    this.poolInstance.transferWei(address, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The contracts Ether has been sent to " + address + "!",
                fail: "Transferring the Ether to " + address + " has failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Adds a list of addresses to the whitelist.
// Parameter: addresses = An array of hash addresses
method.addAddressesToWhitelist = function(addresses, callback){
    var _this = this;
    console.log('The add Addresses to whitelist button was pushed with the following addresses: ' + addresses);

    this.poolInstance.addAddressesToWhitelist(addresses, {from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The list of addresses has been successfully added to the whitelist!",
                fail: "Adding the list of addresses to the whitelist has failed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Sets the Pool to open.
method.setPoolToOpen = function(callback){
    var _this = this;
    console.log('The open pool button was pushed');

    this.poolInstance.setPoolToOpen({from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The pool has been set to open!",
                fail: "The pool was not set to open!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Sets the pool to closed.
method.setPoolToClosed = function(callback){
    var _this = this;

    this.poolInstance.setPoolToClosed({from: this.userAccount}, function(error, result){
        if(!error){

            _this.newTransactionHash({
                hash: result,
                success: "The pool has been set to closed!",
                fail: "The pool has not been set to closed!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};

// Set the pool to cancelled.
method.setPoolToCancelled = function(callback){
    var _this = this;
    console.log('The cancel pool button was pushed');

    this.poolInstance.setPoolToCancelled({from: this.userAccount}, function(error, result){
        if(!error){
            _this.newTransactionHash({
                hash: result,
                success: "The pool has been cancelled!",
                fail: "The pool was not cancelled!"
            });
            callback(null, result);
        }
        else {
            callback(error, null);
        }
    });
};
