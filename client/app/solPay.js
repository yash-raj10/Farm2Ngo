import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";

export const useSolPay = () => {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState(0);
  const [transactionPurpose, setTransactionPurpose] = useState();

  const { connected, publiCKey, sendTransaction, select } = useWallet();
  const { connection } = useConnection();

  select(PhantomWalletName);

  useEffect(() => {
    if (connected) {
      console.log("sol connected");
    }
  }, [connected]);

  const makeTransaction = async (fromWallet, toWallet, amount, reference) => {
    const network = WalletAdapterNetwork.Devnet;
    const endPoint = clusterApiUrl(network);
    const connection = new Connection(endPoint);

    const { blockhash } = await connection.getLatestBlockhash("finalized");

    const transaction = new Transaction({
      recentBlockhash: blockhash,
      feePayer: fromWallet,
    });

    const transferInstruction = SystemProgram.transfer({
      fromPubkey: fromWallet,
      lamports: parseFloat(amount) * LAMPORTS_PER_SOL,

      //   lamports: amount.multipliedBy

      toPubkey: toWallet,
    });

    transferInstruction.keys.push({
      pubkey: reference,
      isSigner: false,
      isWritable: false,
    });

    transaction.add(transferInstruction);

    return transaction;
  };

  const doTransaction = async ({ amount, receiver, transactionPurpose }) => {
    const fromWallet = publiCKey;
    const toWallet = new PublicKey(receiver);
    const bnAmount = new BigNumber(amount);
    const reference = Keypair.generate().publicKey;
    const transaction = await makeTransaction(
      fromWallet,
      toWallet,
      bnAmount,
      reference
    );

    const txnHash = await sendTransaction(transaction, connection);

    console.log(txnHash);
  };

  return {
    connected,
    publiCKey,
    doTransaction,
    amount,
    setAmount,
    receiver,
    setReceiver,
    transactionPurpose,
    setTransactionPurpose,
  };
};
