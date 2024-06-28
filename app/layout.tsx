import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} w-screen h-screen bg-slate-50`}>
				<main className='flex flex-col min-h-screen'>
					<div className='w-screen h-12 border-b border-b-stone-200 flex '>
						<div className='w-1/6 border-r border-r-stone-200 flex justify-center items-center'>
							<p>PiPi's Logo</p>
						</div>
						<div className='flex justify-end items-center grow'>
							<Link
								href='/'
								className='w-20 mr-5 bg-white text-slate-700 border border-slate-300 h-8 hover:bg-slate-100 rounded flex items-center justify-center text-sm font-medium'
							>
								Sign In
							</Link>
						</div>
					</div>
					<div className='grow flex'>
						<div className='w-1/6 border-r border-r-stone-200 flex justify-center'>
							<div className='w-5/6 flex flex-col mt-5'>
								<Link
									href='/'
									className='bg-inherit text-slate-700 hover:bg-slate-100 text-center h-10  text-sm font-medium flex items-center justify-center rounded'
								>
									Home
								</Link>
								<Link
									href='/dogbed'
									className='bg-inherit text-slate-700 hover:bg-slate-100 text-center h-10  text-sm font-medium flex items-center justify-center rounded'
								>
									Dog Bed
								</Link>
								<Link
									href='/light'
									className='bg-inherit text-slate-700 hover:bg-slate-100 text-center h-10 text-sm font-medium flex items-center justify-center rounded'
								>
									Lights
								</Link>
							</div>
						</div>
						<section className='bg-white grow p-7'>{children}</section>
					</div>
				</main>
			</body>
		</html>
	);
}
