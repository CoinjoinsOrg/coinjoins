<script>
  import H1 from "@lib/components/H1.svelte";
  import H2 from "@lib/components/H2.svelte";
  import H3 from "@lib/components/H3.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import Bitcoin from "@lib/img/Bitcoin.svelte";
  import CoinjoinVisual from "@lib/img/CoinjoinVisual.svelte";
  import Eye from "@lib/img/Eye.svelte";
  import GreenLine from "@lib/img/GreenLine.svelte";
  import MoneyBill from "@lib/img/MoneyBill.svelte";
  import RedLine from "@lib/img/RedLine.svelte";
  import Rotate from "@lib/img/Rotate.svelte";
  import TxVisual from "@lib/img/TxVisual.svelte";
  import User from "@lib/img/User.svelte";
  import Utxos from "@lib/img/Utxos.svelte";
  import ClickedArrow from "../lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "../lib/img/UnclickedArrow.svelte";
  import GreenBitcoin from "../lib/img/GreenBitcoin.svelte";
  import GreenBrackets from "../lib/img/GreenBrackets.svelte";
  import GreenBan from "../lib/img/GreenBan.svelte";
  import GreenKey from "../lib/img/GreenKey.svelte";
  import WasabiLogo from "../lib/img/WasabiLogo.svelte";

  const fudBustList = [
    {
      question: "“Coinjoins are pointless. Bitcoin is already anonymous.”",
      answer:
        "Bitcoin is an open ledger where all transactions are publicly trackable. While bitcoin can provide great privacy if you use it carefully, by default it is only a pseudonymous system of <a href='https://docs.wasabiwallet.io/glossary/Glossary-GeneralBitcoin.html#address'>addresses</a>, which makes it easy to make mistakes that can hurt your privacy such as reusing an address for multiple payments. Using bitcoin by yourself is in no way anonymous, a crowd to hide in is required for your bitcoin transactions to gain anonymity. Coinjoins help you reclaim your privacy by breaking popular heuristics used to track bitcoin users such as the <a href='https://docs.wasabiwallet.io/glossary/Glossary-PrivacyWasabi.html#common-input-ownership-heuristic'>common-input-ownership heuristic</a>, and input to output deterministic link. Learn more about how coinjoin tools can <a href='https://blog.wasabiwallet.io/what-are-the-benefits-of-coinjoin'>improve your privacy here</a>.",
      isClicked: false,
    },
    {
      question: "“Coinjoins are illegal.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins will make it impossible to use exchanges.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question:
        "“Coinjoins are only used by criminals and for money laundering.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins will get your funds stolen.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins are only for technical users.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins have high fees.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins just don’t work.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins are made by intelligence agencies.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
    {
      question: "“Coinjoins give you a false sense of privacy.”",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur officiis eius culpa qui ad nihil laudantium distinctio harum illo nulla tempora eaque dicta repudiandae excepturi sunt natus est, dolorum doloremque.",
      isClicked: false,
    },
  ];

  function handleQuestionClick(i) {
    fudBustList[i].isClicked = !fudBustList[i].isClicked;
  }
</script>

<div class="pt-20">
  <div>
    <CoinjoinVisual />
  </div>
  <div class="absolute top-24 mx-auto right-0 left-0">
    <div class="flex flex-col items-center gap-6">
      <H1>Coinjoins</H1>
      <p class="text-white text-center text-2xl">
        Collaborative bitcoin <br />
        transactions to reclaim your privacy
      </p>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="w-6 animate-bounce">
    <ArrowDown />
  </div>
</div>

<div class="relative h-full max-w-5xl mx-auto w-full">
  <div class="flex flex-col items-center gap-14 z-10">
    <div class="w-32"><Bitcoin /></div>

    <h2 class="text-5xl text-white font-inconsolata">Bitcoin is Open</h2>

    <div>
      <p class="text-xl text-center text-white max-w-2xl p-8">
        By design, all bitcoin transactions are publicly visible. That’s great
        to prevent inflation and fraud without relying on third parties. But it
        has some privacy drawbacks.
      </p>
    </div>
  </div>
  <div class="absolute top-0 left-0 w-full h-full z-0">
    <div class="w-10 eye-move-down eye-1 left-1/4 absolute block top-20">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-2 right-1/4 absolute block top-0">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-3 absolute block top-4 left-8">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-4 absolute block right-8 top-4">
      <Eye />
    </div>
    <div class="w-10 eye-move-up eye-5 absolute block top-2/3 left-20">
      <Eye />
    </div>
    <div class="w-10 eye-move-up eye-11 absolute block top-1/2 right-6">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-12 absolute block bottom-10 right-10">
      <Eye />
    </div>
    <div class="w-10 eye-move-up eye-6 absolute block bottom-0 left-1/3">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-7 absolute block bottom-10 left-40">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-8 absolute block bottom-10 left-0">
      <Eye />
    </div>
    <div class="w-10 eye-move-up eye-9 absolute block bottom-0 right-1/3">
      <Eye />
    </div>
    <div class="w-10 eye-move-down eye-10 absolute block bottom-28 right-20">
      <Eye />
    </div>
  </div>
</div>

<div class="flex max-w-5xl mx-auto items-center gap-20">
  <div class="flex-1"><Utxos /></div>
  <div class="flex flex-col gap-12 flex-1">
    <h2 class="text-5xl text-white font-inconsolata">
      It’s all about the UTXOs
    </h2>
    <p class="text-white text-xl">
      Unspent Transaction Outputs, or UTXOs, are essentially the coins in the
      bitcoin network. <br /><br />

      Each UTXO has a very distinct transaction history, making all bitcoin
      transactions easily trackable and unique from one another.
    </p>
  </div>
</div>

<div class="flex gap-20 max-w-5xl mx-auto items-center">
  <div class="flex flex-col gap-12 flex-1">
    <H2>How a Bitcoin Transaction Works</H2>

    <ol class="text-white text-xl">
      <li>
        User picks an amount of bitcoin to send (0.7 BTC) with the receive
        address. To do so, a bitcoin wallet selects at least one spendable coin
        or UTXO, and adds it as an input (1 BTC) in the transaction.
      </li>
      <li>
        The transaction has two outputs: a payment output (0.7 BTC) and a change
        output (0.29 BTC), which returns to the user’s wallet. There is also a
        usual network fee (0.01 BTC to keep it simple in this example).
      </li>
      <li>
        The user signs the transaction and sends it to the bitcoin network so a
        miner can add it to a block to get the network fees. Anyone can verify
        the transaction status at any time.
      </li>
    </ol>
  </div>
  <div class="flex-1"><TxVisual /></div>
</div>

<div class="flex flex-col items-center gap-8 mx-auto max-w-5xl">
  <div class="flex flex-col gap-12 items-center">
    <H2>Tracking Bitcoin Transactions</H2>
    <p class="text-white text-xl text-center">
      Most bitcoin transactions are public. Is a transaction a payment or a
      self-spend? Is it a Lightning channel-opening? Is it connected to other
      transactions? It’s a guessing game with popular heuristics that chain
      analysts use to track bitcoin users.
    </p>
  </div>

  <div class="flex justify-between gap-12">
    <div class="flex flex-col items-center gap-6">
      <div class="w-8"><MoneyBill /></div>
      <H3>A Payment</H3>
      <p class="text-white text-center">
        If there is a change output, then it’s likely a payment, where the
        sender receives the unused amount back to its wallet.
      </p>
    </div>
    <div class="flex flex-col items-center gap-6">
      <div class="w-8"><Rotate /></div>
      <H3>A Self-Transfer</H3>
      <p class="text-white text-center">
        If there is no change output, then it’s likely that bitcoin did not
        change hands and that it is a self-spend.
      </p>
    </div>
    <div class="flex flex-col items-center gap-6">
      <div class="w-8"><User /></div>
      <H3>The Same Owner</H3>
      <p class="text-white text-center">
        If it’s a payment, it’s likely that all the inputs belong to the same
        user, connecting unrelated past transactions.
      </p>
    </div>
  </div>
</div>

<div class="flex gap-12 max-w-5xl mx-auto items-center">
  <div class="flex-1">
    <H2>Surveillance is Easy & Cheap on Bitcoin</H2>
  </div>

  <p class="flex-1 text-white text-xl">
    There is a whole industry of bitcoin surveillance, referred to as chain
    analysis. <br /><br />

    Public block explorers allow anyone to monitor, record and analyse
    transactions. <br /><br />

    It is not necessarily bad or good. It just is. Bitcoin is easily verified by
    anyone.
  </p>
</div>

<div class="flex flex-col gap-12 max-w-3xl mx-auto">
  <div
    class="border-2 border-green-cj rounded text-green-cj text-center px-8 py-6"
  >
    <h2 class="text-5xl font-inconsolata">
      “That’s good, we can catch the bad guys, right?!”
    </h2>
  </div>
  <div class="text-white text-xl text-center">
    Well... technically, due to its transparency bitcoin could become one of the
    most advanced tool for financial surveillance due to the public nature of
    its transactions.<br /><br />

    By default, that makes privacy for regular users quite low, which is harmful
    for the personal safety of consumers and commercial interests of businesses.
  </div>
</div>

<div class="flex max-w-5xl justify-between mx-auto gap-24 items-center">
  <div class="text-white text-xl">
    How about strangers knowing how much money you earn per month or saved in a
    year? <br /><br />

    Or your future spouse knowing you bought her wedding ring before you make
    the big announcement?<br /><br />

    Or your employer knowing who you make political donations to?
  </div>

  <H2>Do you really have nothing to hide?</H2>
</div>

<div class="flex flex-col gap-12 items-center text-center max-w-3xl mx-auto">
  <H2>Privacy is a Choice to Not Share Certain Information</H2>
  <p class="text-white text-xl">
    And the choice should be yours. If you want to share information publicly or
    keep some of it personal, it should be up to you.
  </p>
</div>

<div class="flex flex-col gap-20 items-center max-w-lg mx-auto">
  <div class="border-4 rounded border-red p-8 text-5xl text-center text-red">
    That’s Not How Bitcoin Works
  </div>
  <div class="max-h-60"><RedLine /></div>
  <div class="border-none text-5xl text-center text-white">
    But You Can Reclaim Your Privacy Today
  </div>
  <div class="max-h-60"><GreenLine /></div>
  <div
    class="border-4 rounded border-green-cj p-8 text-5xl text-center text-green-cj"
  >
    Without Changing Bitcoin
  </div>
</div>

<div class="relative h-screen">
  <div class="absolute h-screen w-full top-0 right-0">
    <CoinjoinVisual />
  </div>
  <div class="absolute mx-auto max-w-xl left-0 right-0">
    <div class="flex flex-col justify-around items-center h-screen">
      <H2>Hello, Coinjoins!</H2>
      <div class="text-white text-xl text-center">
        In a coinjoin, many different users participate together in one single
        collaborative transaction.
      </div>
      <div class="text-white text-xl text-center">
        Coinjoin users conceal the history of their coins from the public to
        make their UTXOs fungible on the public bitcoin network.
      </div>
    </div>
  </div>
</div>

<div class="">
  <div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
    <H2>Heard Bad Things About Coinjoins?</H2>
    <p class="text-white text-xl">
      Even 9 years after coinjoins were first discussed, there is still
      uncertainty about its usage. Let’s bust the Fear, Uncertainty and Doubt
      (FUD) of coinjoins.
    </p>
  </div>

  <div class="text-white max-w-5xl mx-auto flex flex-col gap-12 flex-1 pt-12">
    {#each fudBustList as fud, i}
      <div class="flex flex-col gap-2">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="flex gap-4 items-center justify-between hover:cursor-pointer text-red"
          on:click={() => {
            handleQuestionClick(i);
          }}
        >
          <div
            class="flex gap-2 font-inconsolata text-2xl {fudBustList[i]
              .isClicked
              ? 'text-green-cj'
              : 'text-red'}"
          >
            <div>{i + 1 + "."}</div>
            <div>
              {fud.question}
            </div>
          </div>
          <div class="w-8">
            {#if fudBustList[i].isClicked}
              <ClickedArrow />
            {:else}
              <UnclickedArrow />
            {/if}
          </div>
        </div>
        {#if fudBustList[i].isClicked}
          <div class="text-white text-lg px-10">
            {@html fud.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<div class="flex flex-col gap-36">
  <div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
    <H2>Security & Privacy Benefits</H2>
    <p class="text-white text-xl">
      Coinjoin implementations should make no compromises on fundamental privacy
      principles to protect the security of users.
    </p>
  </div>
  <div class="flex justify-between gap-8 max-w-5xl mx-auto">
    <div
      class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg p-8 text-center"
    >
      <div class="w-10"><GreenBitcoin /></div>
      <p class="text-xl">Built on bitcoin only</p>
    </div>
    <div
      class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg p-8 text-center"
    >
      <div class="w-10"><GreenBrackets /></div>
      <p class="text-xl">100% open source code</p>
    </div>
    <div
      class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg p-8 text-center"
    >
      <div class="w-10"><GreenBan /></div>
      <p class="text-xl">No personal information</p>
    </div>
    <div
      class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg p-8 text-center"
    >
      <div class="w-10"><GreenKey /></div>
      <p class="text-xl">Self-custodial</p>
    </div>
  </div>
</div>

<div class="flex flex-col max-w-5xl mx-auto gap-28">
  <div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
    <H2>Ready to Try for Yourself?</H2>
    <p class="text-white text-xl">
      Don’t trust, verify. See for yourself, and learn how coinjoins work by
      participating in them. There are different bitcoin wallets with built-in
      coinjoin features. Wasabi Wallet is one of them though there are others
      that we will discuss later.
    </p>
  </div>
  <div class="flex flex-col gap-16">
    <div class="flex justify-between gap-12">
      <div>
        <H3>Fully <br /> Trustless</H3>
      </div>
      <p class="max-w-md">
        Nobody can steal from you or spy on you. The code is 100% open source to
        anyone can verify its integrity.
      </p>
    </div>
    <div class="flex justify-between gap-12">
      <H3>Works With <br /> Any Amount</H3>
      <p class="max-w-md">
        From 6 561 sats (0.00006561 BTC) to 43 000 BTC, anyone can participate
        in a coinjoin transaction.
      </p>
    </div>
    <div class="flex justify-between gap-12">
      <H3>Fast & <br /> Affordable</H3>
      <p class="max-w-md">
        With ~3 coinjoins per hour, anyone can reclaim their privacy starting
        with one single transaction for 0.3% of bitcoin that has not yet
        coinjoined.
      </p>
    </div>
    <div class="flex justify-between gap-12">
      <H3>Block Space <br /> Efficient</H3>
      <p class="max-w-md">
        Consumes low amount of block space and generates mostly private outputs
        for participants.
      </p>
    </div>
  </div>
</div>

<div class="flex flex-col items-center">
  <div class="flex justify-between max-w-5xl mx-auto items-center gap-28">
    <div>
      <WasabiLogo />
    </div>
    <p class="text-xl">
      A self-custodial bitcoin wallet with easy privacy by default. Receive
      bitcoin, wait and automatically coinjoin.
    </p>
  </div>
  <div>
    <a
      href="https://wasabiwallet.io/"
      class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline"
      >Try Wasabi Wallet →</a
    >
  </div>
</div>
<div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
  <H2>Have More Questions?</H2>
  <p class="text-white text-xl">
    If you have any comments or suggestions, we are open to hear from you.
    Please reach out on coinjoins [at] protonmail [dot] com. <br /> <br />
    Soon, we will share more details about different bitcoin wallets, coinjoin implementations,
    benefits and tradeoffs.
  </p>
</div>

<style>
  ol {
    counter-reset: cupcake;
  }
  li {
    counter-increment: cupcake;
    padding-bottom: 16px;
  }
  li:before {
    content: counters(cupcake, ".") ". ";

    font-weight: bold;
    font-size: large;
  }

  @keyframes animateUp {
    0% {
      opacity: 0.8;
      transform: translateY(0) translateX(0);
    }
    50% {
      opacity: 0.2;
      transform: translateY(-40px) translate(25px);
    }
    100% {
      opacity: 0.8;
      transform: translateY(0) translateX(0);
    }
  }
  @keyframes animateDown {
    0% {
      opacity: 0.2;
      transform: translateY(0) translateX(0);
    }
    50% {
      opacity: 0.8;
      transform: translateY(40px) translate(20px);
    }
    100% {
      opacity: 0.2;
      transform: translateY(0) translateX(0);
    }
  }
  .eye-move-up {
    animation: animateUp 21s linear infinite;
  }
  .eye-move-down {
    animation: animateDown 21s linear infinite;
  }
  .eye-1 {
    animation-duration: 19s;
  }
  .eye-2 {
    animation-duration: 8s;
  }
  .eye-3 {
    animation-duration: 18s;
  }
  .eye-4 {
    animation-duration: 20s;
  }
  .eye-5 {
    animation-duration: 12s;
  }
  .eye-6 {
    animation-duration: 6s;
  }
  .eye-7 {
    animation-duration: 6s;
  }
  .eye-8 {
    animation-duration: 12s;
  }
  .eye-9 {
    animation-duration: 18s;
  }
  .eye-10 {
    animation-duration: 18s;
  }
  .eye-11 {
    animation-duration: 8s;
  }
  .eye-12 {
    animation-duration: 6s;
  }
</style>
