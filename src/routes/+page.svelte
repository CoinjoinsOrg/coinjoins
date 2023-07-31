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
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "@lib/img/UnclickedArrow.svelte";
  import GreenBitcoin from "@lib/img/GreenBitcoin.svelte";
  import GreenBrackets from "@lib/img/GreenBrackets.svelte";
  import GreenBan from "@lib/img/GreenBan.svelte";
  import GreenKey from "@lib/img/GreenKey.svelte";
  import WasabiLogo from "@lib/img/WasabiLogo.svelte";
  import Cj from "@lib/img/Cj.svelte";

  import CjMobile from "@lib/img/CjMobile.svelte";

  const fudBustList = [
    {
      question: "“Coinjoins are pointless. Bitcoin is already anonymous.”",
      answer:
        "Bitcoin is an open ledger where all transactions are publicly trackable. While bitcoin can provide great privacy if you use it carefully, by default it is only a pseudonymous system of <a href='https://docs.wasabiwallet.io/glossary/Glossary-GeneralBitcoin.html#address'>addresses</a>, which makes it easy to make mistakes that can hurt your privacy such as reusing an address for multiple payments. <br/><br/> Using bitcoin by yourself is in no way anonymous, a crowd to hide in is required for your bitcoin transactions to gain anonymity. Coinjoins help you reclaim your privacy by breaking popular heuristics used to track bitcoin users such as the <a href='https://docs.wasabiwallet.io/glossary/Glossary-PrivacyWasabi.html#common-input-ownership-heuristic'>common-input-ownership heuristic</a>, and input to output deterministic link. Learn more about how coinjoin tools can <a href='https://blog.wasabiwallet.io/what-are-the-benefits-of-coinjoin'>improve your privacy here</a>.",
      isClicked: false,
    },
    {
      question: "“Coinjoins are illegal.”",
      answer:
        "While some jurisdictions are friendly towards bitcoin and others <a href='https://en.wikipedia.org/wiki/Legality_of_cryptocurrency_by_country_or_territory'>outright banned</a> it, everyone can use the bitcoin network to send payments across the world without anyone’s permission. A coinjoin is only a type of collaborative bitcoin transaction that is non-custodial. Even when there is a central coinjoin coordinator, it doesn’t control the underlying bitcoin, so it is not considered to be a regulated financial services business like other custodial exchanges.<br/><br/>Can coinjoins be deemed illegal?<br/><br/>From a user’s perspective, coinjoins follow the same legality pattern as bitcoin. In other words, if bitcoin is legal in your country then it is most likely that coinjoins are. If the funds that are coinjoined are considered illegal due to coming from theft, fraud or money laundering, then it’s already illegal but that’s because of the nature of the funds rather than the nature of the coinjoin activity.<br/><br/>With coinjoins, if you want, you can decide to share your transaction information with confidentiality to any interested party to reveal your transaction flow (input to output) but that choice is now yours instead of being public by default.",
      isClicked: false,
    },
    {
      question: "“Coinjoins will make it impossible to use exchanges.”",
      answer:
        "Some exchanges will refuse to sell bitcoin you deposit if they can trace it back to a coinjoin transaction. While it’s been reported that platforms like <a href='https://twitter.com/BlockFiZac/status/1234531935038341120?s=20'>BlockFi</a> or <a href='https://twitter.com/Bitcoinbeach/status/1643786690337669121'>Chivo</a> do this, it's important to remember that they find themselves in the minority for now, and you can use platforms that don’t block coinjoined UTXOs, or use <a href='https://bitcoinmagazine.com/guides/best-p2p-decentralised-exchanges'>P2P exchanges</a>. This has nothing to do with coinjoins, per se.<br/><br/>Bitcoin UTXOs (coins) have distinct transaction histories, which make them strictly distinguishable from one another and therefore not fungible by default. It's also possible to selectively disclose your transaction history with an exchange platform if you believe this would help you get your coins accepted, however, this is not guaranteed.",
      isClicked: false,
    },
    {
      question:
        "“Coinjoins are only used by criminals and for money laundering.”",
      answer:
        "While criminals may use mobile phones, the Internet, and bitcoin, they may also try to use coinjoins as they are only a type of bitcoin transactions. Like for the Internet and bitcoin, the vast majority of people using these technologies are regular individuals just going on about their lives. Financial privacy is quite usual in traditional banking today. Confidentiality with personal consumer data is standard across financial institutions in Western countries. Coinjoins only help bitcoin users gain privacy to a comparable level enjoyed in the traditional financial system. It has been demonstrated by chain analysis companies that only a <a href='https://go.chainalysis.com/rs/503-FAP-074/images/Crypto-Crime-Report-2022.pdf'>small minority</a> of transactions are tied to illicit activities.",
      isClicked: false,
    },
    {
      question: "“Coinjoins will get your funds stolen.”",
      answer:
        "A coinjoin is nothing more than a regular bitcoin transaction which allows multiple participants at the same time. All coinjoin participants hold their own private keys, so even if there is a central coordinator facilitating participants’ registrations, it does not take control of funds. Coinjoins are completely different from custodial mixing service providers, which are shady businesses with a history full of fraud and scams.<br/><br/>A coinjoin coordinator does not take custody, accept deposits or issue withdrawals as it never holds user funds. The coordinator works as a message whiteboard to facilitate the registration of different participants. The coordinator is non-custodial and collects no personal information on users other than what is available publicly on the bitcoin blockchain. All transaction signing is done on the client side application, outside of the coordinator’s control. Learn more <a href='https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html'>about coinjoins here</a>.",
      isClicked: false,
    },
    {
      question: "“Coinjoins are only for technical users.”",
      answer:
        "While it is true that privacy tools have been historically difficult to use, coinjoins change the game. With one single coinjoin transaction, it is possible to reclaim your privacy on bitcoin. It gives you a second chance at protecting your personal information from prying eyes without having to manage advanced tools such as manual coin control. Simply download, verify and install a wallet that supports coinjoin like Wasabi Wallet, generate a wallet and backup your seed phrase, deposit funds into your wallet and the coinjoin will begin automatically. Visit the <a href='https://docs.wasabiwallet.io/getting-started/'>Wasabi Wallet</a> website to get started on your desktop and see for yourself. There are other P2P alternatives available such as <a href='https://github.com/JoinMarket-Org/joinmarket-clientserver'>JoinMarket</a>, which require more technical skills. Doing coinjoins on mobile is possible with <a href='https://samouraiwallet.com/'>Samourai Wallet<a/> but requires users to manually activate Tor with a personal full node to use privately.",
      isClicked: false,
    },
    {
      question: "“Coinjoins have high fees.”",
      answer:
        "There is usually a cost to reclaim your privacy on the bitcoin base layer, especially if you use a central coinjoin coordinator. How much is your privacy worth? Privacy is not free. You have a right to buy privacy for a fee that you may deem acceptable or not.<br/><br/>Some coinjoins have a 0.3% fee charged by the coordinator for bitcoin that have not been coinjoined yet. Is that too much? Some coinjoins coordinator charge you 5% but allow you to bundle your coins to pay less, which has a substantial privacy tradeoff. There are different pricing models, and not all of them are crystal clear, but at least there are options.<br/><br/>Something to remember: there is no free lunch. It’s well understood now that if it’s free, you’re probably the product being sold. Did you know that you can even get paid to gain privacy on bitcoin? Some coinjoin implementations such as JoinMarket, have a market-based design allowing market makers to earn a fee providing liquidity to other participants looking to coinjoin.",
      isClicked: false,
    },
    {
      question: "“Coinjoins just don’t work.”",
      answer:
        "The design goal of a coinjoin transaction is to conceal the history of your transactions from the public by having many different participants share the same transaction to obfuscate the flows of funds. On bitcoin, flows of funds are traceable by default within a transaction, using the direct link between its inputs and outputs. When multiple participants join together in a single bitcoin transaction, the direct links between inputs and outputs are loosened. The larger the group of participants, the larger the plausible deniability. Flows of funds are much harder to trace in a large group, which helps coinjoin participants reclaim their privacy. Coinjoins provide certain <a href='https://blog.wasabiwallet.io/privacy-guarantees-of-wasabi-wallet-2-0/'>privacy guarantees</a> by breaking popular chain analysis heuristics, which are basic assumptions used to track flows of funds on the public bitcoin network.",
      isClicked: false,
    },
    {
      question: "“Coinjoins are made by intelligence agencies.”",
      answer:
        "Some people claim that governments, public authorities or surveillance agencies are in charge of the main coinjoin implementations, allowing them to de-anonymize users. Most teams behind the major coinjoin implementations are publicly known and are not believed to be bad actors. While not all coinjoin designs are the same, what matters is that you use a wallet that has the least amount of information about you. You should use coinjoins such that you can still gain privacy even if the coordinator or wallet is acting against you. “Can do no harm” is an important feature of a coinjoin implementation that you must seek. Coinjoin software is open-source for both client-side and server-side code for all major implementations, which anybody can verify. Reproducible builds are also an important feature to verify that the software you download is the same as the open source code base.",
      isClicked: false,
    },
    {
      question: "“Coinjoins give you a false sense of privacy.”",
      answer:
        "Coinjoins are not the end-all-be-all solution for your privacy on bitcoin. While coinjoining your bitcoin can help you reclaim your privacy, there are other things that you need to learn about such as network-level privacy, address labels, manual coin control, Tor and more. Even some privacy wallets offering coinjoins as a feature require users to take great care in ensuring that no personal information is leaked. It may sound overwhelming at first but some bitcoin wallets such as Wasabi Wallet make privacy easy by default.<br/><br/>Being part of a coinjoin transaction with potentially hundreds of other participants, there are many possibilities to link different inputs and outputs so a high level of plausible deniability can be gained. Your online behaviour also affects your privacy tremendously that technology cannot necessarily deal with. For instance, never share a bitcoin address on your social media account.",
      isClicked: false,
    },
  ];

  function handleQuestionClick(i) {
    fudBustList[i].isClicked = !fudBustList[i].isClicked;
  }
</script>

<div class="flex items-center relative w-full">
  <CoinjoinVisual />
  <div
    class="min-w-[320px] absolute top-[40%] mx-auto right-0 left-0 flex flex-col gap-10 md:gap-48"
  >
    <div class="flex flex-col items-center gap-10">
      <H1>Coinjoins</H1>
      <p class="text-white text-center text-2xl">
        Collaborative bitcoin <br />
        transactions to reclaim your privacy.
      </p>
    </div>

    <div class="flex justify-center">
      <div class="w-6 animate-bounce">
        <a href="#open">
          <ArrowDown />
        </a>
      </div>
    </div>
  </div>
</div>

<div id="open" class="relative mx-auto w-full h-full">
  <div
    class="absolute flex flex-col items-center justify-center left-0 top-0 bottom-0 right-0 gap-10 md:gap-14 z-10 mx-auto"
  >
    <div class="w-20 md:w-32"><Bitcoin /></div>

    <H2>Bitcoin is Open</H2>

    <p class="text-xl text-center text-white max-w-2xl p-8">
      By design, all bitcoin transactions are publicly visible. That’s great to
      prevent inflation and fraud without relying on third parties. But it has
      some privacy drawbacks.
    </p>
  </div>

  <div class="w-full h-[calc(50vh)]">
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

<div
  class="flex flex-col md:flex-row max-w-5xl mx-auto items-center gap-20 px-4"
>
  <div class="w-full px-4 md:px-0 flex-auto md:flex-1"><Utxos /></div>

  <div class="flex flex-col gap-12 flex-1">
    <H2>It’s all about the UTXOs</H2>
    <p class="text-white text-xl">
      Unspent Transaction Outputs, or UTXOs, are essentially the coins in the
      bitcoin network. <br /><br />

      Each UTXO has a very distinct transaction history, making all bitcoin
      transactions easily trackable and unique from one another.
    </p>
  </div>
</div>

<div
  class="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto items-center px-4"
>
  <div class="flex flex-col gap-12 flex-1">
    <H2>How a Bitcoin Transaction Works</H2>

    <ol class="text-white text-xl">
      <li>
        User picks an amount of bitcoin to send (0.7 BTC) with the destination
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
  <div class="px-4 md:px-0 w-full flex-1"><TxVisual /></div>
</div>

<div class="flex flex-col items-center gap-8 mx-auto max-w-5xl px-4">
  <div class="flex flex-col gap-12 items-center text-center">
    <H2>Tracking Bitcoin Transactions</H2>
    <p class="text-white text-xl text-center">
      Most bitcoin transactions are public. Is a transaction a payment or a
      self-spend? Is it a Lightning channel-opening? Is it connected to other
      transactions? It’s a guessing game with popular heuristics that chain
      analysts use to track bitcoin users.
    </p>
  </div>

  <div
    class="flex flex-col md:flex-row justify-between gap-12 px-4 items-center"
  >
    <div class="flex flex-col items-center gap-6 py-8 max-w-md">
      <div class="w-8"><MoneyBill /></div>
      <div class="text-2xl">A Payment</div>
      <p class="text-white text-center">
        If there is a change output, then it’s likely a payment, where the
        sender receives the unused amount back to its wallet.
      </p>
    </div>
    <div class="flex flex-col items-center gap-6 py-8 max-w-md">
      <div class="w-8"><Rotate /></div>
      <div class="text-2xl">A Self-Transfer</div>
      <p class="text-white text-center">
        If there is no change output, then it’s likely that bitcoin did not
        change hands and that it is a self-spend.
      </p>
    </div>
    <div class="flex flex-col items-center gap-6 py-8 max-w-md">
      <div class="w-8"><User /></div>
      <div class="text-2xl">The Same Owner</div>
      <p class="text-white text-center">
        If it’s a payment, it’s likely that all the inputs belong to the same
        user, connecting unrelated past transactions.
      </p>
    </div>
  </div>
</div>

<div
  class="flex flex-col md:flex-row gap-12 max-w-xl md:max-w-5xl mx-auto items-center md:px-4"
>
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

<div class="flex flex-col gap-12 max-w-xl md:max-w-3xl mx-auto px-4">
  <div
    class="border-2 border-green-cj rounded text-green-cj text-center px-8 py-6"
  >
    <h2 class="text-3xl md:text-5xl font-inconsolata">
      “Good we can catch the bad guys, right?!”
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

<div
  class="flex flex-col md:flex-row max-w-xl md:max-w-5xl justify-between mx-auto gap-24 items-center px-4"
>
  <div>
    <H2>Do you really have nothing to hide?</H2>
  </div>
  <div class="text-white text-xl">
    How about strangers knowing how much money you earn per month or saved in a
    year? <br /><br /><br />

    Or your future spouse knowing you bought her wedding ring before you make
    the big announcement?<br /><br /><br />

    Or your employer knowing who you make political donations to?
  </div>
</div>

<div
  class="flex flex-col gap-12 items-center text-center max-w-3xl mx-auto px-4"
>
  <H2>Privacy is a Choice to Not Share Certain Information</H2>
  <p class="text-white text-xl">
    And the choice should be yours. If you want to share information publicly or
    keep some of it personal, it should be up to you.
  </p>
</div>

<div class="flex flex-col gap-20 items-center max-w-lg mx-auto px-4">
  <div
    class="border-4 rounded border-red p-4 md:p-8 text-3xl md:text-5xl text-center text-red font-inconsolata"
  >
    That’s Not How Bitcoin Works
  </div>
  <div class="max-h-60"><RedLine /></div>
  <div
    class="border-none text-3xl md:text-5xl text-center text-white font-inconsolata"
  >
    But You Can Reclaim Your Privacy Today
  </div>
  <div class="max-h-60"><GreenLine /></div>
  <div
    class="border-4 rounded border-green-cj p-4 md:p-8 text-3xl md:text-5xl text-center text-green-cj font-inconsolata"
  >
    Without Changing Bitcoin
  </div>
</div>

<div class="relative w-screen h-full flex justify-center items-center">
  <div
    class="min-w-[320px] w-full h-full hidden md:flex justify-center items-center"
  >
    <Cj />
  </div>
  <div
    class="min-w-[480px] w-full h-full flex justify-center items-center md:hidden"
  >
    <CjMobile />
  </div>

  <div
    class="min-w-[320px] absolute mx-auto px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl"
  >
    <div class="flex flex-col items-center gap-28 text-center">
      <H2>Hello, Coinjoins!</H2>

      <div class="flex flex-col max-w-xl lg:flex-row lg:max-w-none gap-12">
        <div class="text-white text-2xl text-center">
          In a coinjoin, many different users participate together in one single
          collaborative transaction. It can be hundreds of people.
        </div>
        <div class="text-white text-2xl text-center">
          A coinjoin transaction has many standard outputs of the same amounts,
          which makes it very hard to track them back to their initial inputs.
        </div>
        <div class="text-white text-2xl text-center">
          That allows coinjoin users to conceal the history of their coins from
          the public to make their UTXOs fungible on the public bitcoin network.
        </div>
      </div>
    </div>
  </div>
</div>

<div class="px-4 flex flex-col gap-28">
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
      <div class="flex flex-col gap-4">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="flex gap-2 md:gap-10 items-center justify-between hover:cursor-pointer text-red"
          on:click={() => {
            handleQuestionClick(i);
          }}
        >
          <div
            class="flex gap-2 font-inconsolata text-xl md:text-2xl {fudBustList[
              i
            ].isClicked
              ? 'text-red font-bold'
              : 'text-white font-normal'}"
          >
            <div>{i + 1 + "."}</div>
            <div>
              {fud.question}
            </div>
          </div>
          <div class="w-8 flex-shrink-0">
            {#if fudBustList[i].isClicked}
              <ClickedArrow />
            {:else}
              <UnclickedArrow />
            {/if}
          </div>
        </div>
        {#if fudBustList[i].isClicked}
          <div class="text-white/80 text-xl md:px-16">
            {@html fud.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<div class="flex flex-col gap-28 px-4">
  <div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
    <H2>Security & Privacy Benefits</H2>
    <p class="text-white text-xl">
      Coinjoin implementations should make no compromises on fundamental privacy
      principles to protect the security of users.
    </p>
  </div>
  <div
    class="flex flex-col lg:flex-row justify-between gap-8 max-w-5xl mx-auto"
  >
    <div class="flex-1 flex-col sm:flex-row flex gap-8">
      <div
        class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg px-10 py-8 text-center"
      >
        <div class="w-10"><GreenBitcoin /></div>
        <p class="text-xl">Built on <br /> Bitcoin Only</p>
      </div>
      <div
        class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg px-10 py-8 text-center"
      >
        <div class="w-10"><GreenBrackets /></div>
        <p class="text-xl">100% Open <br /> Source Code</p>
      </div>
    </div>
    <div class="flex-1 flex-col sm:flex-row flex gap-8">
      <div
        class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg px-10 py-8 text-center"
      >
        <div class="w-10"><GreenBan /></div>
        <p class="text-xl">No Personal <br />Information</p>
      </div>
      <div
        class="flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg px-10 py-8 text-center"
      >
        <div class="w-10"><GreenKey /></div>
        <p class="text-xl">Self-Custodial</p>
      </div>
    </div>
  </div>
</div>

<div id="try" class="flex flex-col max-w-5xl mx-auto gap-28 px-4">
  <div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
    <H2>Ready to Try for Yourself?</H2>
    <p class="text-white text-xl">
      Don’t trust, verify. See for yourself, and learn how coinjoins work by
      participating in them. There are different bitcoin wallets with built-in
      coinjoin features. Wasabi Wallet is one of them though there are others
      that we will discuss later.
    </p>
  </div>
  <div class="flex flex-col gap-16 items-center">
    <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
      <div>
        <H3>Fully <br /> Trustless</H3>
      </div>
      <p class="max-w-lg md:max-w-md text-xl">
        Nobody can steal from you or spy on you. The code is 100% open source to
        anyone can verify its integrity.
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
      <H3>Works With <br /> Any Amount</H3>
      <p class="max-w-lg md:max-w-md text-xl">
        From 6 561 sats (0.00006561 BTC) to 43 000 BTC, anyone can participate
        in a coinjoin transaction.
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
      <H3>Fast & <br /> Affordable</H3>
      <p class="max-w-lg md:max-w-md text-xl">
        With ~3 coinjoins per hour, anyone can reclaim their privacy starting
        with one single transaction for 0.3% of bitcoin that has not yet
        coinjoined.
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
      <H3>Block Space <br /> Efficient</H3>
      <p class="max-w-lg md:max-w-md text-xl">
        Consumes low amount of block space and generates mostly private outputs
        for participants.
      </p>
    </div>
  </div>
</div>

<div class="gap-12 flex flex-col items-center px-4">
  <div
    class="flex flex-col md:flex-row justify-between max-w-5xl mx-auto items-center gap-28"
  >
    <div class="w-52">
      <WasabiLogo />
    </div>
    <p class="block text-center md:text-left text-xl max-w-lg">
      A self-custodial bitcoin wallet with easy privacy by default. Receive
      bitcoin, wait and automatically coinjoin.
    </p>
  </div>
  <div>
    <a
      href="https://wasabiwallet.io/"
      class="block border border-green-cj bg-green-cj px-8 py-2 rounded-md text-lg text-dark-blue no-underline"
      >Try Wasabi Wallet</a
    >
  </div>
</div>

<div
  class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto px-4"
>
  <H2>Have More Questions?</H2>
  <p class="text-white text-xl">
    If you have any comments or suggestions, we are open to hear from you.
    Please reach out on <a href="mailto:coinjoins@protonmail.com"
      >coinjoins@protonmail.com</a
    >. <br /> <br />
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
    padding-bottom: 32px;
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
