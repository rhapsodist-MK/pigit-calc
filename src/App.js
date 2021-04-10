import { useEffect, useState } from 'react'

const App = () => {
	const [buyCost, setBuyCost] = useState(0)
	const [sendOverseasCost, setSendOverseasCost] = useState(0)
	const [exchangeRate, setExchangeRate] = useState(0)
	const [sendDorminateCost, setSendDorminateCost] = useState(0)
	const [getPer, setGetPer] = useState(0)
	const [buymaPer, setBuymaPer] = useState(0)
	const [tax, setTax] = useState(0)

	const [overseasTotal, setOverseasTotal] = useState(0)
	const [totalBuyCost, setTotalBuyCost] = useState(0)
	const [myEarn, setMyEarn] = useState(0)
	const [buymaEarn, setBuymaEarn] = useState(0)
	const [taxResult, setTaxResult] = useState(0)
	const [result, setResult] = useState(0)

	useEffect(() => {
		setExchangeRate(110)
		setSendDorminateCost(380)
		setGetPer(25)
		setBuymaPer(7.5)
		setTax(10)
	}, [])

	useEffect(() => {
		let tempResult = 0
		const overseasTotal = Math.ceil(
			(buyCost * 1 + sendOverseasCost * 1) * exchangeRate,
		)

		const totalBuyCost = overseasTotal + sendDorminateCost
		const myEarn = Math.ceil((totalBuyCost / 100) * getPer)

		tempResult += totalBuyCost + myEarn
		const buymaEarn = Math.ceil((tempResult / 100) * buymaPer)

		tempResult += buymaEarn
		const taxResult = Math.ceil((tempResult / 100) * tax)
		tempResult += taxResult

		setOverseasTotal(overseasTotal)
		setTotalBuyCost(totalBuyCost)
		setMyEarn(myEarn)
		setBuymaEarn(buymaEarn)
		setTaxResult(taxResult)
		setResult(tempResult)
	}, [
		buyCost,
		sendOverseasCost,
		exchangeRate,
		sendDorminateCost,
		getPer,
		buymaPer,
		tax,
	])

	return (
		<div>
			<div>
				사입금액{' '}
				<input
					type="number"
					value={buyCost}
					onChange={(e) => setBuyCost(e.target.value)}
				/>{' '}
				$
			</div>
			<div>
				국제배송료
				<input
					type="number"
					value={sendOverseasCost}
					onChange={(e) => setSendOverseasCost(e.target.value)}
				/>{' '}
				$
			</div>
			<div>
				환율
				<input
					type="number"
					value={exchangeRate}
					onChange={(e) => setExchangeRate(e.target.value)}
				/>{' '}
				¥
			</div>
			<div>
				국내배송{' '}
				<input
					type="number"
					value={sendDorminateCost}
					onChange={(e) => setSendDorminateCost(e.target.value)}
				/>
				¥
			</div>
			<div>
				이율{' '}
				<input
					type="number"
					value={getPer}
					onChange={(e) => setGetPer(e.target.value)}
				/>{' '}
				%
			</div>
			<div>
				BUYMA수수료{' '}
				<input
					type="number"
					value={buymaPer}
					onChange={(e) => setBuymaPer(e.target.value)}
				/>{' '}
				%
			</div>
			<div>
				소비세{' '}
				<input
					type="number"
					value={tax}
					onChange={(e) => setTax(e.target.value)}
				/>{' '}
				%
			</div>

			{/* <div>
				<button onClick={onSubmit}>계산</button>
			</div> */}
			<br />
			<br />
			<div>
				<div>국제 비용: {overseasTotal}¥</div>
				<div>총 소요비용(+국내배송료): {totalBuyCost}¥</div>
				<div>이윤: {myEarn}¥</div>
				<div>buyma수수료: {buymaEarn}¥</div>
				<div>소비세: {taxResult}¥</div>
				<div>총 가격: {result}¥</div>
			</div>
		</div>
	)
}

export default App
