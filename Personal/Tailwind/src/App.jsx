import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App({chg_nm}) {
	const [count, setCount] = useState(0)
	console.log("props : " ,chg_nm );
	return (
		<>
		<h1 className='bg-green-400 p-4 m-10 rounded-b-xl text-black text-center text-5xl'>Tailwind CSS</h1>
		<div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
		<div>
			<img
			src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
			alt="test"
			className="object-cover object-center rounded-t-xl"
			/>
		</div>
		<div className="flex flex-col py-3 px-3 pb-10">
			<div className="flex justify-between ">
			<h1 className="font-bold ">Bored ape nft accidental</h1>
			<h1>{chg_nm}</h1>
			</div>
			<div className="flex  justify-between">
			<p>#345</p>
			<p>0.01</p>
			</div>
		</div>
		</div>
		</>
	)
}

export default App
