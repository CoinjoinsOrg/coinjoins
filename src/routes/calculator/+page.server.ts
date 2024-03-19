import { fail } from "@sveltejs/kit";

export const load = async (event) => {
  try {
    const response = await fetch(
      "https://mempool.space/api/v1/fees/recommended"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data = await response.json();

    return {
      miningFees: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      error: "Failed to fetch data",
    };
  }
};

export const actions = {
  default: async (event) => {
    const { request } = event;
    const formData = await request.formData();
    const btcAmount: number = Number(formData.get("how_much_bitcoin"));

    if (btcAmount <= 0) {
      return fail(400, { errBtcAmount: "Amount should be positive." });
    }

    const inputsCount: number = Number(formData.get("how_many_inputs"));

    if (inputsCount <= 0) {
      return fail(400, {
        errInputsCount: "There should be at least one input.",
      });
    }
    const privacyLevelStr: string = String(formData.get("privacy_level"));

    if (privacyLevelStr !== "low" && privacyLevelStr !== "high")
      return fail(400, {
        errPrivacyLevel: "Choose a desired privacy level.",
      });

    let isPrivacyLevelHigh: boolean;

    if (privacyLevelStr === "low") {
      isPrivacyLevelHigh = false;
    } else if (privacyLevelStr === "high") {
      isPrivacyLevelHigh = true;
    } else {
      // Handle invalid input
      // For example, you could throw an error or set a default value
      throw new Error("Invalid privacy level value");
    }

    const miningFeeRate: number = Number(formData.get("mining_fees"));

    if (miningFeeRate === 0)
      return fail(400, {
        errMiningFeeRate: "Cannot get mining fee rate from Mempool.Space",
      });

    const isFirstCoinjoinRaw = formData.get("is_first_coinjoin");
    if (isFirstCoinjoinRaw !== "false" && isFirstCoinjoinRaw !== "true")
      return fail(400, {
        errIsFirstCoinjoin: "Choose if you have already coinjoined or not.",
      });

    const isFirstCoinjoin: boolean =
      isFirstCoinjoinRaw !== null && isFirstCoinjoinRaw !== undefined
        ? isFirstCoinjoinRaw.toString().toLowerCase() === "true" ||
          isFirstCoinjoinRaw.toString() === "1"
        : false;

    console.log("btcAmount", btcAmount);
    console.log("inputsCount", inputsCount);
    console.log("isPrivacyLevelHigh", isPrivacyLevelHigh);
    console.log("miningFeeRate", miningFeeRate);
    console.log("isFirstCoinjoin", isFirstCoinjoin);

    let coordinatorFees: number = 0;

    if (btcAmount <= 0.01) {
      coordinatorFees = 0;
    } else {
      coordinatorFees = btcAmount * 0.003;
    }

    let minPrivacyLevel: number = 0;

    if (isPrivacyLevelHigh) {
      minPrivacyLevel = 50;
    } else {
      minPrivacyLevel = 5;
    }

    let transactionQueueLength: number = 0;

    if (isPrivacyLevelHigh) {
      transactionQueueLength = 6;
    } else if (isFirstCoinjoin) {
      transactionQueueLength = 2;
    } else {
      transactionQueueLength = 1;
    }

    let standaloneTransactionInputs: number = 0;

    standaloneTransactionInputs = inputsCount % 10;

    let initialTransactionsWith10Inputs: number = 0;

    initialTransactionsWith10Inputs = Math.floor(inputsCount / 10);

    let totalNumberOfTransactions: number = 0;

    if (standaloneTransactionInputs === 0) {
      totalNumberOfTransactions =
        initialTransactionsWith10Inputs * transactionQueueLength;
    } else {
      totalNumberOfTransactions =
        initialTransactionsWith10Inputs * transactionQueueLength +
        transactionQueueLength;
    }

    let liquidityMultiplier: number = 0;

    liquidityMultiplier = Math.ceil(btcAmount / inputsCount / 3);

    totalNumberOfTransactions = totalNumberOfTransactions * liquidityMultiplier;

    let numberOfInitialTransactions: number = 0;

    numberOfInitialTransactions =
      Math.ceil(inputsCount / 10) * liquidityMultiplier;

    let utxosFor10InputsTransaction: number = 0;

    if (initialTransactionsWith10Inputs === 0) {
      utxosFor10InputsTransaction = 0;
    } else {
      utxosFor10InputsTransaction = 10;
    }

    const vbytesPerInput: number = 69;
    const vbytesPerOutput: number = 31;
    let totalVbytesFor10Utxos: number = 0;

    totalVbytesFor10Utxos =
      (vbytesPerInput + vbytesPerOutput) *
      utxosFor10InputsTransaction *
      transactionQueueLength;

    let outputs_first_tx: number;
    let outputs_second_tx: number;
    let outputs_third_tx: number;
    let outputs_fourth_tx: number;
    let outputs_fifth_tx: number;
    let outputs_sixth_tx: number;
    let outputs_seventh_tx: number;
    let outputs_eighth_tx: number;
    let outputs_ninth_tx: number;

    if (standaloneTransactionInputs === 0) {
      outputs_first_tx = 0;
    } else if (standaloneTransactionInputs >= 10) {
      outputs_first_tx = 10;
    } else {
      outputs_first_tx = standaloneTransactionInputs + 1;
    }

    if (outputs_first_tx === 0) {
      outputs_second_tx = 0;
    } else if (outputs_first_tx >= 10) {
      outputs_second_tx = 10;
    } else {
      outputs_second_tx = outputs_first_tx + 1;
    }

    if (outputs_second_tx === 0) {
      outputs_third_tx = 0;
    } else if (outputs_second_tx >= 10) {
      outputs_third_tx = 10;
    } else {
      outputs_third_tx = outputs_second_tx + 1;
    }

    if (outputs_third_tx === 0) {
      outputs_fourth_tx = 0;
    } else if (outputs_third_tx >= 10) {
      outputs_fourth_tx = 10;
    } else {
      outputs_fourth_tx = outputs_third_tx + 1;
    }

    if (outputs_fourth_tx === 0) {
      outputs_fifth_tx = 0;
    } else if (outputs_fourth_tx >= 10) {
      outputs_fifth_tx = 10;
    } else {
      outputs_fifth_tx = outputs_fourth_tx + 1;
    }

    if (outputs_fifth_tx === 0) {
      outputs_sixth_tx = 0;
    } else if (outputs_fifth_tx >= 10) {
      outputs_sixth_tx = 10;
    } else {
      outputs_sixth_tx = outputs_fifth_tx + 1;
    }

    if (outputs_sixth_tx === 0) {
      outputs_seventh_tx = 0;
    } else if (outputs_sixth_tx >= 10) {
      outputs_seventh_tx = 10;
    } else {
      outputs_seventh_tx = outputs_sixth_tx + 1;
    }

    if (outputs_seventh_tx === 0) {
      outputs_eighth_tx = 0;
    } else if (outputs_seventh_tx >= 10) {
      outputs_eighth_tx = 10;
    } else {
      outputs_eighth_tx = outputs_seventh_tx + 1;
    }

    if (outputs_eighth_tx === 0) {
      outputs_ninth_tx = 0;
    } else if (outputs_eighth_tx >= 10) {
      outputs_ninth_tx = 10;
    } else {
      outputs_ninth_tx = outputs_eighth_tx + 1;
    }

    let finalNumberOfOutputs: number = 0;

    if (isPrivacyLevelHigh) {
      finalNumberOfOutputs =
        initialTransactionsWith10Inputs * 10 * outputs_ninth_tx;
    } else if (isFirstCoinjoin) {
      finalNumberOfOutputs =
        initialTransactionsWith10Inputs * 10 + outputs_second_tx;
    } else {
      finalNumberOfOutputs =
        initialTransactionsWith10Inputs * 10 + outputs_first_tx;
    }

    finalNumberOfOutputs = finalNumberOfOutputs * liquidityMultiplier;

    let totalVbytesStandaloneTransaction: number = 0;

    if (isPrivacyLevelHigh) {
      totalVbytesStandaloneTransaction =
        vbytesPerInput * standaloneTransactionInputs +
        vbytesPerOutput * outputs_first_tx +
        vbytesPerInput * outputs_first_tx +
        vbytesPerOutput * outputs_second_tx +
        vbytesPerInput * outputs_second_tx +
        vbytesPerOutput * outputs_third_tx +
        vbytesPerInput * outputs_third_tx +
        vbytesPerInput * outputs_fourth_tx + // error?
        vbytesPerOutput * outputs_fourth_tx +
        vbytesPerInput * outputs_fifth_tx +
        vbytesPerOutput * outputs_fifth_tx +
        vbytesPerInput * outputs_sixth_tx +
        vbytesPerOutput * outputs_sixth_tx +
        vbytesPerInput * outputs_seventh_tx +
        vbytesPerOutput * outputs_seventh_tx +
        vbytesPerInput * outputs_eighth_tx +
        vbytesPerOutput * outputs_eighth_tx +
        vbytesPerInput * outputs_ninth_tx +
        vbytesPerOutput * outputs_ninth_tx;
    } else if (isFirstCoinjoin) {
      totalVbytesStandaloneTransaction =
        vbytesPerInput * standaloneTransactionInputs +
        vbytesPerOutput * outputs_first_tx +
        vbytesPerInput * outputs_first_tx +
        vbytesPerOutput * outputs_second_tx;
    } else {
      totalVbytesStandaloneTransaction =
        vbytesPerInput * standaloneTransactionInputs +
        vbytesPerOutput * outputs_first_tx;
    }

    let totalVbytesForAllTransactions: number = 0;

    totalVbytesForAllTransactions =
      (totalVbytesFor10Utxos * initialTransactionsWith10Inputs +
        totalVbytesStandaloneTransaction) *
      liquidityMultiplier;

    let totalMiningFeesInSats: number;

    totalMiningFeesInSats = totalVbytesForAllTransactions * miningFeeRate;

    let totalFeesInSats: number =
      coordinatorFees * 100000000 + totalMiningFeesInSats;

    return {
      success: true,
      totalFeesInBtc: totalFeesInSats / 100000000,
      totalFeesInSats: totalFeesInSats,
      coordinatorFeesInBtc: coordinatorFees,
      coordinatorFeesInSats: coordinatorFees * 100000000,
      miningFeesInBtc: totalMiningFeesInSats / 100000000,
      miningFeesInSats: totalMiningFeesInSats,
      params: {
        btcAmount: btcAmount,
        inputsCount: inputsCount,
        privacyLevelStr: privacyLevelStr,
        miningFeeRate: miningFeeRate,
        isFirstCoinjoin: isFirstCoinjoin,
      },
    };
  },
};
