# oracle-watch

DeFi protocols, lending markets and AI agents on Base trust Chainlink prices. When a feed stops updating, or the Base sequencer goes
down, a protocol that does not check can liquidate, mint or trade on an old price. This repo checks every feed every hour and
publishes the result below, in [`data/status.json`](data/status.json) and in [`data/history.csv`](data/history.csv).

Built by [Bactory](https://bactory.tech), whose [AgentGuard](https://github.com/bactory-tech/bactory) refuses any agent action
when the price is not fresh. [GitHub](https://github.com/bactory-tech) · [X](https://x.com/bactorydottech)

## Live report

<!-- report:start -->
**Last check:** 2026-10-10 18:24 UTC · block [52433648](https://basescan.org/block/52433648) · 181 feeds

**Base sequencer:** 🟢 up since 2026-06-26 (106d 1h)

| 🟢 ok | ⏸️ paused | 🟡 late | 🔴 stale | ⚠️ invalid | ⚠️ error |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 177 | 4 | 0 | 0 | 0 | 0 |

### Needs attention

Nothing. Every crypto feed updated within its heartbeat.

### Closest to their heartbeat

| Feed | Age | Heartbeat | Used |
| --- | ---: | ---: | ---: |
| [ynETHx / ETH Exchange Rate](https://basescan.org/address/0x4e7dB2f9a28348AB48a968dd4217D565D1F15Ba4) | 23h 53m | 1d 0h | 100% |
| [LBTC / USD](https://basescan.org/address/0x9e07546c9Fe8868855CD04B26051a26D1599E270) | 23h 47m | 1d 0h | 99% |
| [Coinbase MSFT](https://basescan.org/address/0xeB10A6c9aa7E537aEd766C08c35Dae35B321b18c) | 23h 41m | 1d 0h | 99% |
| [Coinbase MSTR](https://basescan.org/address/0xB3cE282CD188b35DA0E38D8Bc7d58e33173D202a) | 23h 33m | 1d 0h | 98% |
| [EURC / USD](https://basescan.org/address/0xa25cBF938Ace4b219a9d012971c7b4e898EF6c68) | 23h 30m | 1d 0h | 98% |

<details><summary><b>All 181 feeds</b></summary>

| Feed | Value | Age | Heartbeat | Status |
| --- | ---: | ---: | ---: | --- |
| [AAVE / USD](https://basescan.org/address/0x65B5d02E1Fff839b8B67Fa26F8540e5f11454316) | 170.5692 | 1h 33m | 1d 0h | 🟢 ok |
| [AAVE / USD](https://basescan.org/address/0x3d6774EF702A10b20FCa8Ed40FC022f7E4938e07) | 170.4542 | 1h 33m | 1d 0h | 🟢 ok |
| [AAVE Network Emergency Count (Base)](https://basescan.org/address/0xd9c5B59A913d75AC44EB51b7E0F3f5B58816ECAc) | 0 | 3h 16m | 1d 0h | 🟢 ok |
| [ADA / USD](https://basescan.org/address/0x5299a0e1e79BaebA0EAB96C10727DF35489aAA38) | 0.2532297 | 39m | 1d 0h | 🟢 ok |
| [ADA / USD](https://basescan.org/address/0xf4DF589BeAbE63fEF977c73b9150BD2bdA1e346C) | 0.25341029 | 47m | 1d 0h | 🟢 ok |
| [AERO / USD](https://basescan.org/address/0x4EC5970fC728C5f65ba413992CD5fF6FD70fcfF0) | 0.89850373 | 35m | 1d 0h | 🟢 ok |
| [AMP / USD](https://basescan.org/address/0x1688e4B274a4CC9fD398EbA6Ae4dfb6528A9D2bc) | 0.00064078 | 1h 19m | 1d 0h | 🟢 ok |
| [APT / USD](https://basescan.org/address/0x88a98431C25329AA422B21D147c1518b34dD36F4) | 0.87075554 | 2m | 1d 0h | 🟢 ok |
| [APXUSD / USD Exchange Rate](https://basescan.org/address/0x2B5f2D558BEb94d2FE5D97f53b564B5e17715c39) | 1 | 23h 25m | 1d 0h | 🟢 ok |
| [ARKB Reserves](https://basescan.org/address/0xB366E8Efb9661323ff477CedF70f55F897D6cFeA) | 32,024.43 | 21h 20m | 1d 0h | 🟢 ok |
| [ARSx Proof of Reserves](https://basescan.org/address/0x4F2fe331C8EB0fb8A84A4d893C87Cf28A36Ab093) | 2,011,066.35 | 4h 0m | 1d 0h | 🟢 ok |
| [AUD / USD](https://basescan.org/address/0x46e51B8cA41d709928EdA9Ae43e42193E6CDf229) | 0.698415 | 13h 21m | 1d 0h | 🟢 ok |
| [AVAX / USD](https://basescan.org/address/0xE70f2D34Fd04046aaEC26a198A35dD8F2dF5cd92) | 10.4751 | 1h 22m | 1d 0h | 🟢 ok |
| [AVNT / USD](https://basescan.org/address/0x50997b806B574501cC34a2a6d845e4dc1Bd9Aa8c) | 0.13444549 | 2m | 1d 0h | 🟢 ok |
| [AXL / USD](https://basescan.org/address/0x676C4C6C31D97A5581D3204C04A8125B350E2F9D) | 0.05411643 | 41m | 1d 0h | 🟢 ok |
| [BNB / USD](https://basescan.org/address/0x4b7836916781CAAfbb7Bd1E5FDd20ED544B453b1) | 749.5425 | 12h 44m | 1d 0h | 🟢 ok |
| [BRL / USD](https://basescan.org/address/0x0b0E64c05083FdF9ED7C5D3d8262c4216eFc9394) | 0.200511 | 21m | 1h 0m | 🟢 ok |
| [BTC / USD](https://basescan.org/address/0x32F587986D3fb47601157c19615d568BeD0BCabc) | 82,983.03 | 3m | 20m | 🟢 ok |
| [BTC / USD](https://basescan.org/address/0xC01502b887D09B0f329981764268fC32a94cB453) | 82,987.11 | 3m | 20m | 🟢 ok |
| [BTC / USD](https://basescan.org/address/0x8D9e0911A532e2a3C005667B475E6F9742355f2b) | 82,982.33 | 3m | 20m | 🟢 ok |
| [CAD / USD](https://basescan.org/address/0xA840145F87572E82519d578b1F36340368a25D5d) | 0.70142213 | 45m | 1h 0m | 🟢 ok |
| [cbBTC / USD](https://basescan.org/address/0x07DA0E54543a844a80ABE69c8A12F22B3aA59f9D) | 83,016.64 | 18m | 20m | 🟢 ok |
| [CBBTC / USD](https://basescan.org/address/0x10509b4053385b49145Fab2D6B1c58e96Eac5b79) | 82,960.89 | 3h 45m | 1d 0h | 🟢 ok |
| [cbBTC Reserves](https://basescan.org/address/0x0F8E057D1D7b282EF968D26E9cB432617dF52519) | 94,679.44 | 3h 49m | 1d 0h | 🟢 ok |
| [CBDOGE / USD](https://basescan.org/address/0x95051De9Db5Cac61682f64505006f2991dEaB3c2) | 0.08609097 | 15h 32m | 1d 0h | 🟢 ok |
| [CBETH / ETH](https://basescan.org/address/0x806b4Ac04501c29769051e42783cF04dCE41440b) | 1.1414 | 3h 59m | 1d 0h | 🟢 ok |
| [CBETH / USD](https://basescan.org/address/0xd7818272B9e248357d13057AAb0B417aF31E817d) | 2,860.71 | 8m | 20m | 🟢 ok |
| [cbETH-ETH Exchange Rate](https://basescan.org/address/0x868a501e68F3D1E89CfC0D22F6b22E8dabce5F04) | 1.1413 | 3h 55m | 1d 0h | 🟢 ok |
| [CBXRP / USD](https://basescan.org/address/0xEEe1a9D5A0C36d99972C057Cb959267e88Ab9160) | 1.4086 | 12h 46m | 1d 0h | 🟢 ok |
| [ccUSDC / USDC Exchange Rate](https://basescan.org/address/0x1Bb54D3d4edBB52B83BC89Da5B176Facc90D46bc) | 1.1394 | 19h 21m | 1d 0h | 🟢 ok |
| [CHF / USD](https://basescan.org/address/0x3A1d6444fb6a402470098E23DaD0B7E86E14252F) | 1.2048 | 4h 58m | 1d 0h | 🟢 ok |
| [Coinbase AAPL](https://basescan.org/address/0x787f13dEa48Db0897CbCDD985de77809D837F988) | 336.844 | 22h 55m | 1d 0h | 🟢 ok |
| [Coinbase AMZN](https://basescan.org/address/0x06A8E4b3aBB3B7543d8396FB2B763d22820cB295) | 261.8 | 23h 3m | 1d 0h | 🟢 ok |
| [Coinbase COIN](https://basescan.org/address/0x408e44f504A7371a345F03a73dDC96A4b48e8aa7) | 179.906 | 22h 28m | 1d 0h | 🟢 ok |
| [Coinbase CRCL](https://basescan.org/address/0x0231cF2635D1E17bB5c2462cc7504Ba1fBd61f33) | 84.5655 | 22h 24m | 1d 0h | 🟢 ok |
| [Coinbase GOOGL](https://basescan.org/address/0x5bF49E0ffA937CE2FfF033c739aD7C634c4D34F2) | 352.6329 | 1d 1h | 1d 0h | ⏸️ paused |
| [Coinbase INTC](https://basescan.org/address/0xAB657C39bac0D5886250D70849e2E3E008F2EECB) | 104.3535 | 22h 44m | 1d 0h | 🟢 ok |
| [Coinbase META](https://basescan.org/address/0x6526aE6797A76123638b863AeE4dD27Ba4E4b27D) | 719.9158 | 1d 0h | 1d 0h | ⏸️ paused |
| [Coinbase MSFT](https://basescan.org/address/0xeB10A6c9aa7E537aEd766C08c35Dae35B321b18c) | 536.0777 | 23h 41m | 1d 0h | 🟢 ok |
| [Coinbase MSTR](https://basescan.org/address/0xB3cE282CD188b35DA0E38D8Bc7d58e33173D202a) | 154.613 | 23h 33m | 1d 0h | 🟢 ok |
| [Coinbase NVDA](https://basescan.org/address/0x04689a41629776563E6822F76f2e57D148d28513) | 230.2639 | 1d 3h | 1d 0h | ⏸️ paused |
| [Coinbase SNDK](https://basescan.org/address/0x388b0dC46C0Fb05A74BeE0994fa5b02c6Fcca2eA) | 1,581.77 | 22h 48m | 1d 0h | 🟢 ok |
| [Coinbase SPCX](https://basescan.org/address/0x6A634B235903C4ad6376892180d6fF8612e3Fa68) | 162.6165 | 22h 28m | 1d 0h | 🟢 ok |
| [Coinbase TSLA](https://basescan.org/address/0xFaf869185383a24F8cb00e27BdA6b63B9905DCb4) | 383.965 | 1d 2h | 1d 0h | ⏸️ paused |
| [Coinshift USPC Reserves](https://basescan.org/address/0xE1F1011D0043392174bF95F0725130E870AbACaa) | 25,977,650.43 | 1h 25m | 1d 0h | 🟢 ok |
| [COMP / USD](https://basescan.org/address/0x9DDa783DE64A9d1A60c49ca761EbE528C35BA428) | 24.893 | 44m | 1d 0h | 🟢 ok |
| [DAI / USD](https://basescan.org/address/0x591e79239a7d679378eC8c847e5038150364C78F) | 0.99975922 | 3h 58m | 1d 0h | 🟢 ok |
| [DEGEN / USD](https://basescan.org/address/0xE62BcE5D7CB9d16AB8b4D622538bc0A50A5799c2) | 0.00099544 | 8h 39m | 1d 0h | 🟢 ok |
| [DOGE / USD](https://basescan.org/address/0x249d22434438889106DbB59a576a1787b115E52d) | 0.08624271 | 3h 53m | 1d 0h | 🟢 ok |
| [DOGE / USD](https://basescan.org/address/0x304adeae3041d6D0745249FD4583e8C542De67d6) | 0.08617464 | 3h 54m | 1d 0h | 🟢 ok |
| [ETH / USD](https://basescan.org/address/0x50015f8b17fb2C290Dde41fDc246ed0dcEE93a8b) | 2,507.07 | 12m | 20m | 🟢 ok |
| [ETH / USD](https://basescan.org/address/0x5731Ae06077c79A3B292498940211E0aE7130bd3) | 2,506.99 | 16m | 20m | 🟢 ok |
| [ETH / USD](https://basescan.org/address/0xa4250cE1aA15Ff4cb5E5a8655293b65694e436Ed) | 2,507.52 | 10m | 20m | 🟢 ok |
| [EUR / USD](https://basescan.org/address/0xc91D87E81faB8f93699ECf7Ee9B44D11e1D53F0F) | 1.1202 | 44m | 1h 0m | 🟢 ok |
| [EURC / USD](https://basescan.org/address/0x9867186e52d2F1C2c565CDA6E747101Fa56501e0) | 1.1192 | 2m | 1h 0m | 🟢 ok |
| [EURC / USD](https://basescan.org/address/0xDAe398520e2B67cd3f27aeF9Cf14D93D927f8250) | 1.1194 | 3h 54m | 1d 0h | 🟢 ok |
| [EURC / USD](https://basescan.org/address/0xa25cBF938Ace4b219a9d012971c7b4e898EF6c68) | 1.1196 | 23h 30m | 1d 0h | 🟢 ok |
| [ezETH / ETH](https://basescan.org/address/0x960BDD1dFD20d7c98fa482D793C3dedD73A113a3) | 1.0844 | 3h 24m | 1d 0h | 🟢 ok |
| [ezETH / ETH Exchange Rate](https://basescan.org/address/0xC4300B7CF0646F0Fe4C5B2ACFCCC4dCA1346f5d8) | 1.0873 | 3h 56m | 1d 0h | 🟢 ok |
| [EZETH / ETH Exchange Rate](https://basescan.org/address/0x442f870a32Ea74C1A4630f7Dc357F8aBd552eF37) | 1.0873 | 21h 56m | 1d 0h | 🟢 ok |
| [FRNT Proof of Reserves](https://basescan.org/address/0xB93901c344325f89630C56458eD1dD27a76a2FCd) | 968,051.85 | 6h 7m | 1d 0h | 🟢 ok |
| [GBP / USD](https://basescan.org/address/0xCceA6576904C118037695eB71195a5425E69Fa15) | 1.3239 | 10h 49m | 1d 0h | 🟢 ok |
| [GHO / USD](https://basescan.org/address/0x1B5FEF61Ff9B690364359b03cC07E060b12Bd3C1) | 0.99913783 | 21h 56m | 1d 0h | 🟢 ok |
| [GHO / USD](https://basescan.org/address/0x42868EFcee13C0E71af89c04fF7d96f5bec479b0) | 0.99908366 | 3h 38m | 1d 0h | 🟢 ok |
| [GLDY Reserves](https://basescan.org/address/0xf488FA1B4Ac8210bf0b2d212176ca28c48F86708) | 3,350.52 | 19h 41m | 1d 0h | 🟢 ok |
| [HOME / USD](https://basescan.org/address/0x121934C415937863d64ef93436169444633EE0d8) | 0.0058207 | 11m | 1d 0h | 🟢 ok |
| [HYPE / USD](https://basescan.org/address/0xEdB56c5DE751eD3182DDa337f7d9ab33cf091DcA) | 85.5352 | 58m | 1d 0h | 🟢 ok |
| [iBTC Proof of Reserves](https://basescan.org/address/0x7FCED5198e43ec93Ef2179DFC70a8dcf494DcB80) | 0.01 | 4h 2m | 1d 0h | 🟢 ok |
| [IDR / USD](https://basescan.org/address/0x05A6cF213EcC5501A11a08EBefA4A8a60313ef97) | 0.00005589 | 22m | 1h 0m | 🟢 ok |
| [inETH / ETH Exchange Rate](https://basescan.org/address/0x83ac12dBb5Bd7Fa597ab2FFEc9F2F13DeDdFe163) | 1.0402 | 3h 51m | 1d 0h | 🟢 ok |
| [instETH / ETH Exchange Rate](https://basescan.org/address/0x9C6BF4884Ff0c7873652F7d5142FA3b9859a526D) | 1.0909 | 3h 26m | 1d 0h | 🟢 ok |
| [JITOSOL / USD](https://basescan.org/address/0x0ca181015d21A5ed19baFC17F2138883C2b16D54) | 143.4627 | 1h 27m | 1d 0h | 🟢 ok |
| [JITOSOL-SOL Calculated](https://basescan.org/address/0x4b28dFaF2aCaF982524a75409Ab59DFf85942Ad7) | 1.3055 | 3h 20m | 1d 0h | 🟢 ok |
| [LBTC / BTC](https://basescan.org/address/0x1E6c22AAA11F507af12034A5Dc4126A6A25DC8d2) | 1.004 | 4h 2m | 1d 0h | 🟢 ok |
| [LBTC / BTC Exchange Rate](https://basescan.org/address/0xBf4892f41c753c5E1b03e8a7B425bd2679a6C224) | 1.0049 | 21h 55m | 1d 0h | 🟢 ok |
| [LBTC / USD](https://basescan.org/address/0x9e07546c9Fe8868855CD04B26051a26D1599E270) | 82,545.83 | 23h 47m | 1d 0h | 🟢 ok |
| [LINK / ETH](https://basescan.org/address/0xc5E65227fe3385B88468F9A01600017cDC9F3A12) | 0.00522614 | 2h 17m | 1d 0h | 🟢 ok |
| [LINK / USD](https://basescan.org/address/0x17CAb8FE31E32f08326e5E27412894e49B0f9D65) | 13.1254 | 3h 22m | 1d 0h | 🟢 ok |
| [LTC / USD](https://basescan.org/address/0xa03A14F790eb8F5Ff73227278a3bb6eDE57Dc8c9) | 64.1837 | 3h 46m | 1d 0h | 🟢 ok |
| [MAMO / USD](https://basescan.org/address/0xeF7541b388a77C1709a3d44BfBfC5c1ED3F0Ac94) | 0.00782 | 50m | 1d 0h | 🟢 ok |
| [MAVIA / USD](https://basescan.org/address/0x979447581b39caCA33EF0CA8208592393D16cc13) | 0.03108 | 2h 29m | 1d 0h | 🟢 ok |
| [MEW / USD](https://basescan.org/address/0x9FB8b5A4b3FE655564f0c76616ae79DE90Cc7382) | 0.00047796 | 3m | 1d 0h | 🟢 ok |
| [MLN / USD](https://basescan.org/address/0x122b5334A8b55861dBc6729c294451471FbF318D) | 1.4206 | 4h 7m | 1d 0h | 🟢 ok |
| [MOG / USD](https://basescan.org/address/0x4aeb6D15769EaD32D0c5Be2940F40c7CFf53801d) | 0.00000011 | 1h 15m | 1d 0h | 🟢 ok |
| [MORPHO / USD](https://basescan.org/address/0xe95e258bb6615d47515Fc849f8542dA651f12bF6) | 2.4197 | 4m | 1d 0h | 🟢 ok |
| [MXN / USD](https://basescan.org/address/0xb87Eba1aF247453930B71B87e948049882B1A95e) | 0.05437129 | 2h 2m | 1d 0h | 🟢 ok |
| [MXN / USD](https://basescan.org/address/0x9e8Ee77c76d4fa41306056D1C3196AF5da1600bd) | 0.05431122 | 19m | 1h 0m | 🟢 ok |
| [NGN / USD](https://basescan.org/address/0xdfbb5Cbc88E382de007bfe6CE99C388176ED80aD) | 0.00074704 | 55m | 1h 0m | 🟢 ok |
| [NZD / USD](https://basescan.org/address/0x06bdFe07E71C476157FC025d3cCD4BBe08e83EF9) | 0.561255 | 5h 45m | 1d 0h | 🟢 ok |
| [OP / USD](https://basescan.org/address/0x3E3A6bD129A63564FE7abde85FA67c3950569060) | 0.14041032 | 2m | 1d 0h | 🟢 ok |
| [OUSD / USD](https://basescan.org/address/0xa718561C4592217b9fa301ADdD183FE4F347E096) | 0.9998917 | 3h 22m | 1d 0h | 🟢 ok |
| [PAXG / USD](https://basescan.org/address/0xd49c546D32D5472a7F7704EC183128512a1B2fcb) | 4,183.08 | 13h 5m | 1d 0h | 🟢 ok |
| [PCE Price Index — Level](https://basescan.org/address/0x18A3fcA54FaC5B05837205bA4b823fc56191F793) | 131.579 | 10d 5h | 35d 0h | 🟢 ok |
| [PCE Price Index — Percent Change (Annual Rate)](https://basescan.org/address/0x2a18E2d46Cb067b69e0759dB39b16597fC42D962) | 5 | 10d 5h | 35d 0h | 🟢 ok |
| [PEPE / USD](https://basescan.org/address/0xB48ac6409C0c3718b956089b0fFE295A10ACDdad) | 0.00000402 | 3h 13m | 1d 0h | 🟢 ok |
| [PHP / USD](https://basescan.org/address/0x0396000dc82bfAEe746A9Ac6dC69dAd3223Ca9c6) | 0.01593205 | 10h 29m | 1d 0h | 🟢 ok |
| [POL / USD](https://basescan.org/address/0x5E988c11a4f92155C30D9fb69Ed75597f712B113) | 0.10129016 | 1h 59m | 1d 0h | 🟢 ok |
| [pufETH / ETH Exchange Rate](https://basescan.org/address/0x69a1d14a4e58e97EDE8337DE61eEB2e4a55886E0) | 1.0743 | 3h 24m | 1d 0h | 🟢 ok |
| [RDNT / USD](https://basescan.org/address/0xEf2E24ba6def99B5e0b71F6CDeaF294b02163094) | 0.00059558 | 17m | 1d 0h | 🟢 ok |
| [Real Final Sales to Private Domestic Purchasers — Level](https://basescan.org/address/0x65623109aA4561AD3cfF503542083548CeD7e085) | 21,432.08 | 10d 5h | 35d 0h | 🟢 ok |
| [Real Final Sales to Private Domestic Purchasers — Percent Change (Annual Rate)](https://basescan.org/address/0xe2b3688371130f333443428Cf03f27Ce0378F9dC) | 4.6 | 10d 5h | 35d 0h | 🟢 ok |
| [Real GDP — Level](https://basescan.org/address/0x0df397aFE00085C138a99eFB39C498e08eB95aD1) | 24,408.01 | 10d 5h | 35d 0h | 🟢 ok |
| [Real GDP — Percent Change (Annual Rate)](https://basescan.org/address/0xe0eda54fC1362C0d7d0ff855E4fCEA79916Fe094) | 2.2 | 10d 5h | 35d 0h | 🟢 ok |
| [RETH / ETH](https://basescan.org/address/0xf397bF97280B488cA19ee3093E81C0a77F02e9a5) | 1.1707 | 8h 30m | 1d 0h | 🟢 ok |
| [rETH / ETH Exchange Rate](https://basescan.org/address/0x1E6A29666288a310326B37d823Fe4Ea3937424D2) | 1.1735 | 12h 2m | 1d 0h | 🟢 ok |
| [RLUSD / USD](https://basescan.org/address/0x900E653c6b25eCf1eF43525fcCC5263E654085cc) | 1 | 3h 45m | 1d 0h | 🟢 ok |
| [RSETH / ETH](https://basescan.org/address/0xd7221b10FBBC1e1ba95Fd0B4D031C15f7F365296) | 1.0796 | 8h 15m | 1d 0h | 🟢 ok |
| [rsETH / ETH Exchange Rate](https://basescan.org/address/0x99DAf760d2CFB770cc17e883dF45454FE421616b) | 1.0817 | 3h 37m | 1d 0h | 🟢 ok |
| [rsETH / ETH Exchange Rate](https://basescan.org/address/0xAc0a5bB171350536207245afB0EB269b8195501B) | 1.0817 | 21h 56m | 1d 0h | 🟢 ok |
| [RSR / USD](https://basescan.org/address/0xAa98aE504658766Dfe11F31c5D95a0bdcABDe0b1) | 0.0016064 | 3h 41m | 1d 0h | 🟢 ok |
| [rswETH / ETH Exchange Rate](https://basescan.org/address/0x97b770B0200CCe161907a9cbe0C6B177679f8F7C) | 1.0823 | 4h 3m | 1d 0h | 🟢 ok |
| [rwaUSD NAV](https://basescan.org/address/0xD8B5397eDE8B83553BdFCCAA496dd771c5336D37) | 1 | 1h 55m | 1d 0h | 🟢 ok |
| [SAVUSD / AVUSD Exchange Rate](https://basescan.org/address/0xAc5287ad4B1629a88964085FDD1F7d45f8032D33) | 1.2075 | 3h 7m | 1d 0h | 🟢 ok |
| [sfrxETH-frxETH Exchange Rate](https://basescan.org/address/0x1Eba1d6941088c8FCE2CbcaC80754C77871aD093) | 1.1714 | 3h 42m | 1d 0h | 🟢 ok |
| [SGD / USD](https://basescan.org/address/0x81575495532fB311Efc5C993B612564274F0949b) | 0.78082603 | 4h 9m | 1d 0h | 🟢 ok |
| [SHIB / USD](https://basescan.org/address/0xC8D5D660bb585b68fa0263EeD7B4224a5FC99669) | 0.00000546 | 3h 55m | 1d 0h | 🟢 ok |
| [SNX / USD](https://basescan.org/address/0xe3971Ed6F1A5903321479Ef3148B5950c0612075) | 0.24459939 | 2m | 1d 0h | 🟢 ok |
| [SOL / USD](https://basescan.org/address/0xDa5Fd22F9382e57534fEdA4fF544878aa1cf401f) | 109.887 | 1h 22m | 1d 0h | 🟢 ok |
| [SOL / USD](https://basescan.org/address/0x5D424D5a664a9f3c820F422297077d49877F9C93) | 110.0669 | 3h 55m | 1d 0h | 🟢 ok |
| [SolvBTC.BBN / SolvBTC Exchange Rate](https://basescan.org/address/0x67283A47E470afbCcc4aC74ccC32401a81027691) | 1 | 3h 27m | 1d 0h | 🟢 ok |
| [STETH / ETH](https://basescan.org/address/0xf586d0728a47229e747d824a939000Cf21dEF5A0) | 0.99971882 | 4h 1m | 1d 0h | 🟢 ok |
| [STG / USD](https://basescan.org/address/0x63Af8341b62E683B87bB540896bF283D96B4D385) | 0.17508509 | 3h 30m | 1d 0h | 🟢 ok |
| [SUI / USD](https://basescan.org/address/0x491a921c41d6a97C57426E0c0108a231cd6E5f60) | 1.1187 | 1h 25m | 1d 0h | 🟢 ok |
| [SUPEROETHB / ETH](https://basescan.org/address/0x39C6E14CdE46D4FFD9F04Ff159e7ce8eC20E10B4) | 0.99934617 | 3h 40m | 1d 0h | 🟢 ok |
| [SUSDAI / USDAI Exchange Rate](https://basescan.org/address/0x1a42ec779Ed3e5249d9b83Ad6B51492953080Ad9) | 1.1179 | 25m | 1d 0h | 🟢 ok |
| [sUSDe / USD](https://basescan.org/address/0x79cf4a31B29D69191f0b6E97916eB93FEB81E533) | 1.2517 | 3h 22m | 1d 0h | 🟢 ok |
| [sUSDe / USDe Exchange Rate](https://basescan.org/address/0xdEd37FC1400B8022968441356f771639ad1B23aA) | 1.2524 | 3h 57m | 1d 0h | 🟢 ok |
| [sUSDS / USDS Exchange Rate](https://basescan.org/address/0x906B24a339b848369B24Dc9Ed368b947fB9693bf) | 1.1123 | 3h 36m | 1d 0h | 🟢 ok |
| [sUSDz / USDz Exchange Rate](https://basescan.org/address/0xD89c7fFB39C44b17EAecd8717a75A36c19C07582) | 1.2857 | 3h 59m | 1d 0h | 🟢 ok |
| [swBTC / WBTC Exchange Rate](https://basescan.org/address/0xBD867487712ADeC5A59b9Ae475Ee942f652B4C91) | 1 | 3h 26m | 1d 0h | 🟢 ok |
| [syrupUSDC-USDC Exchange Rate](https://basescan.org/address/0x311D3A3faA1d5939c681E33C2CDAc041FF388EB2) | 1.1873 | 3h 31m | 1d 0h | 🟢 ok |
| [TBTC / USD](https://basescan.org/address/0x6D75BFB5A5885f841b132198C9f0bE8c872057BF) | 82,911.71 | 3h 45m | 1d 0h | 🟢 ok |
| [Tenbin Aggregated Off-Chain Reserves](https://basescan.org/address/0x7b1C8C60c05913aF3Aa21BaE3B32A02Ab4f39Bd3) | 397,985.82 | 23h 13m | 1d 0h | 🟢 ok |
| [tETH / wstETH Exchange Rate](https://basescan.org/address/0x8004571d9f54dE016fc3D448e7AEe2d70947727A) | 1.0076 | 5h 53m | 1d 0h | 🟢 ok |
| [TETH Reserves](https://basescan.org/address/0x0b68ac37a1668DAaab1882543368E076C38C40e9) | 4,460.26 | 21h 16m | 1d 0h | 🟢 ok |
| [TRUMP / USD](https://basescan.org/address/0x7bAfa1Af54f17cC0775a1Cf813B9fF5dED2C51E5) | 1.8884 | 1h 59m | 1d 0h | 🟢 ok |
| [TRY / USD](https://basescan.org/address/0x29413773e7CD4Dfd6Ad89a50887877b88a6C592C) | 0.02034341 | 1m | 1h 0m | 🟢 ok |
| [ultraETHs / ETH Exchange Rate](https://basescan.org/address/0xbb9786e37D54251477EbC1325b04ACdCA18C2254) | 1 | 4h 1m | 1d 0h | 🟢 ok |
| [uniBTC / BTC Exchange Rate](https://basescan.org/address/0xbC7c5023eE571e4D9C4890C90a16be05c1EEf410) | 1.016 | 10h 28m | 1d 0h | 🟢 ok |
| [USD / ARS](https://basescan.org/address/0x9eb8a54d0590798880C665C7A6d51B95f4078Ad7) | 1,606.38 | 3h 57m | 1d 0h | 🟢 ok |
| [USDAI / USD](https://basescan.org/address/0xFCb2C36ac8A91cE9D3c94590ED239E1f683467fe) | 1.0003 | 3h 30m | 1d 0h | 🟢 ok |
| [USDC / USD](https://basescan.org/address/0x458138Fc0D67027E9A6778ef40a6ffC318c69061) | 0.99984231 | 21h 56m | 1d 0h | 🟢 ok |
| [USDC / USD](https://basescan.org/address/0x7e860098F58bBFC8648a4311b374B1D669a2bc6B) | 0.99985776 | 5h 34m | 1d 0h | 🟢 ok |
| [USDC / USD](https://basescan.org/address/0xd0Dc8c910565D94D408729D16bE5467B5d7633Ad) | 0.99985475 | 21h 56m | 1d 0h | 🟢 ok |
| [USDe / USD](https://basescan.org/address/0x790181e93e9F4Eedb5b864860C12e4d2CffFe73B) | 0.99963971 | 4h 6m | 1d 0h | 🟢 ok |
| [USDO Reserves](https://basescan.org/address/0x5218Ebeb96bD2bAFe21F9b143f5672552629ba79) | 14,203,880.62 | 18h 21m | 1d 0h | 🟢 ok |
| [USDS / USD](https://basescan.org/address/0x2330aaE3bca5F05169d5f4597964D44522F62930) | 0.99987076 | 3h 56m | 1d 0h | 🟢 ok |
| [USDT / USD](https://basescan.org/address/0xf19d560eB8d2ADf07BD6D13ed03e1D11215721F9) | 0.99914646 | 5h 33m | 1d 0h | 🟢 ok |
| [USDT / USD](https://basescan.org/address/0xE6c6bf78308C46bad5Cae5D0ed44b36370b4B00d) | 0.99911 | 21h 56m | 1d 0h | 🟢 ok |
| [USDT / USD](https://basescan.org/address/0xE5fa3A4e4208858ADdf2CDb4e12651E89f1f1A70) | 0.99911 | 21h 56m | 1d 0h | 🟢 ok |
| [USR / USD](https://basescan.org/address/0x4a595E0a62E50A2E5eC95A70c8E612F9746af006) | 0.08255547 | 21h 30m | 1d 0h | 🟢 ok |
| [VIRTUAL / USD](https://basescan.org/address/0xEaf310161c9eF7c813A14f8FEF6Fb271434019F7) | 0.73814094 | 43m | 1d 0h | 🟢 ok |
| [VVV / USD](https://basescan.org/address/0xaABc55Ca55D70B034e4daA2551A224239890282F) | 22.4031 | 2h 16m | 1d 0h | 🟢 ok |
| [vyUSD-USD Exchange Rate](https://basescan.org/address/0x99C098FA069B120dd81E56c0f2178093cc7a851f) | 0.923628 | 18m | 1h 0m | 🟢 ok |
| [WBTC / USD](https://basescan.org/address/0xCCADC697c55bbB68dc5bCdf8d3CBe83CdD4E071E) | 82,845.51 | 16s | 20m | 🟢 ok |
| [weETH / eETH Exchange Rate](https://basescan.org/address/0x35e9D7001819Ea3B39Da906aE6b06A62cfe2c181) | 1.1055 | 3h 47m | 1d 0h | 🟢 ok |
| [WEETH / EETH Exchange Rate](https://basescan.org/address/0xd71cdcAaea1Ce61146CD7257BE65412007a62819) | 1.1054 | 21h 55m | 1d 0h | 🟢 ok |
| [weETH / ETH](https://basescan.org/address/0xFC1415403EbB0c693f9a7844b92aD2Ff24775C65) | 1.1052 | 3h 26m | 1d 0h | 🟢 ok |
| [WELL / USD](https://basescan.org/address/0xc15d9944dAefE2dB03e53bef8DDA25a56832C5fe) | 0.0022533 | 57m | 1d 0h | 🟢 ok |
| [wOETH / OETH Exchange Rate](https://basescan.org/address/0xe96EB1EDa83d18cbac224233319FA5071464e1b9) | 1.1705 | 3h 46m | 1d 0h | 🟢 ok |
| [wrsETH-ETH Exchange Rate](https://basescan.org/address/0xe8dD07CCf5BC4922424140E44Eb970F5950725ef) | 1.0817 | 3h 38m | 1d 0h | 🟢 ok |
| [WSTETH / ETH](https://basescan.org/address/0x43a5C292A453A3bF3606fa856197f09D7B74251a) | 1.2458 | 4h 0m | 1d 0h | 🟢 ok |
| [WSTETH / STETH Exchange Rate](https://basescan.org/address/0xfd14a390149e23F972AbC9B7E31d3B1fdf508B38) | 1.2459 | 21h 56m | 1d 0h | 🟢 ok |
| [wstETH-stETH Exchange Rate](https://basescan.org/address/0xB88BAc61a4Ca37C43a3725912B1f472c9A5bc061) | 1.246 | 6h 0m | 1d 0h | 🟢 ok |
| [wstUSR / stUSR Exchange Rate](https://basescan.org/address/0x0594c1a01375c1151c2ca78BE4870836EbFA9846) | 1.133 | 3h 33m | 1d 0h | 🟢 ok |
| [XAG / USD](https://basescan.org/address/0x7dBC779B2A6F9B9AaB83a2dED78A2F7E9e203f0c) | 60.82 | 4h 42m | 1d 0h | 🟢 ok |
| [XAU / USD](https://basescan.org/address/0x5213eBB69743b85644dbB6E25cdF994aFBb8cF31) | 4,193.83 | 13h 21m | 1d 0h | 🟢 ok |
| [XDC / USD](https://basescan.org/address/0x237A94A589DD38DF7e50CeFDa0b8916a54d01ecC) | 0.03537527 | 20s | 4h 0m | 🟢 ok |
| [XGLD / XAUT Exchange Rate](https://basescan.org/address/0xDbc71D0ca5F37dB7A9a45E5c0C46FfFe5E7C24B5) | 1.0097 | 23h 2m | 1d 0h | 🟢 ok |
| [XRP / USD](https://basescan.org/address/0xF35059FB4471333F81E4F39fA40260FF53Dc340b) | 1.4061 | 16h 36m | 1d 0h | 🟢 ok |
| [XRP / USD](https://basescan.org/address/0x281F1D237Fa1382d96f7A4fd190500D182042e3b) | 1.4069 | 13h 45m | 1d 0h | 🟢 ok |
| [xSolvBTC NAV](https://basescan.org/address/0x17738F7dacFc1De7d06f22cC52211EBf68744dBA) | 1 | 3h 39m | 1d 0h | 🟢 ok |
| [YBTC-BTC Exchange Rate](https://basescan.org/address/0x95Eba7bE2f755a298984bd714822994f1d4B6313) | 1.0115 | 3h 44m | 1d 0h | 🟢 ok |
| [YETH-ETH Exchange Rate](https://basescan.org/address/0xaE95742Cf839529798Bcd1610c6E0AFEBA0cBC03) | 0.94664621 | 3h 56m | 1d 0h | 🟢 ok |
| [YFI / USD](https://basescan.org/address/0xD40e758b5eC80820B68DFC302fc5Ce1239083548) | 2,418.06 | 48m | 1d 0h | 🟢 ok |
| [ynETH / ETH Exchange Rate](https://basescan.org/address/0xb4482096e3cdE116C15fC0D700a73a58FEdeB8c0) | 1.081 | 21h 25m | 1d 0h | 🟢 ok |
| [ynETHx / ETH Exchange Rate](https://basescan.org/address/0x4e7dB2f9a28348AB48a968dd4217D565D1F15Ba4) | 1.0981 | 23h 53m | 1d 0h | 🟢 ok |
| [yUSD / USD Exchange Rate](https://basescan.org/address/0xc1a849217F3BaB97F1a46b990e369D6705B4be96) | 0.998454 | 47m | 1h 0m | 🟢 ok |
| [ZAR / USD](https://basescan.org/address/0x2ecc8A8B370fC6a217166b2782a35339bEBEe98B) | 0.060533 | 22m | 1h 0m | 🟢 ok |
| [ZEC / USD](https://basescan.org/address/0x69e5BC4988a9AF30Ec827C5609c0D41028446ec0) | 1,225.01 | 21m | 1d 0h | 🟢 ok |
| [ZRO / USD](https://basescan.org/address/0xdc31a4CCfCA039BeC6222e20BE7770E12581bfEB) | 1.9982 | 10m | 1d 0h | 🟢 ok |

</details>
<!-- report:end -->

## How a feed is judged

Each feed has a **heartbeat**: the longest Chainlink lets it go without an update (it also updates sooner when the price moves past
its deviation threshold). Feed list, heartbeats and market hours come from Chainlink's own feed directory, the source behind
[docs.chain.link](https://docs.chain.link/data-feeds/price-feeds/addresses?network=base).

| Status | Meaning |
| --- | --- |
| 🟢 ok | Updated within its heartbeat, plus 2% or two minutes of slack. |
| 🟡 late | Past its heartbeat, but by less than one more. |
| 🔴 stale | More than two heartbeats without an update. Do not trust it. |
| ⏸️ paused | A market-hours feed (FX, US equities, metals) past its heartbeat. Expected while that market is closed. |
| ⚠️ invalid | Price of zero or below, or a timestamp of zero or in the future. |
| ⚠️ error | The read failed. |

The **sequencer** line reads Chainlink's L2 Sequencer Uptime Feed for Base. Chainlink recommends that protocols reject prices while the
sequencer is down and for a grace period (often one hour) after it comes back.

## Use it in your code

The same checks, in Solidity:

```solidity
(, int256 answer, , uint256 updatedAt, ) = feed.latestRoundData();
require(answer > 0, "invalid price");
require(block.timestamp - updatedAt <= HEARTBEAT, "stale price");

(, int256 down, uint256 startedAt, , ) = sequencerFeed.latestRoundData();
require(down == 0, "sequencer down");
require(block.timestamp - startedAt > 1 hours, "sequencer grace period");
```

Or read the latest status straight from this repo:

```bash
curl -s https://raw.githubusercontent.com/bactory-tech/oracle-watch/main/data/status.json | jq '.counts'
```

## Run it yourself

```bash
git clone https://github.com/bactory-tech/oracle-watch && cd oracle-watch
npm install
npm run check          # updates README.md and data/
npm run check:strict   # also exits 1 when a feed is stale, invalid or unreadable
```

Set `BASE_RPC_URL` to use your own RPC. The [workflow](.github/workflows/watch.yml) runs `npm run check` every hour and commits
the result.

## License

MIT
