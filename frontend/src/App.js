// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <header className="bg-gray-50">
    <nav className="h-full px-8 mx-auto max-w-7xl lg:px-16">
        <ul className="flex items-center h-20 gap-4">
            <li>
                <a href="/" className="flex gap-2" id="logo">
                    <svg className="hover:animate-spin" width="30" height="30" fill="none"    xmlns="http://www.w3.org/2000/svg" focusable="false"    shapeRendering="geometricPrecision" viewBox="0 0 24 24">
                        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M5.014 3.945A4.768 4.768 0 1112 9.78h.002c-.612 0-1.167.248-1.569.65a4.768 4.768 0 01-5.418-6.484z" fill="#5C59EB"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M3.945 5.014a4.768 4.768 0 016.485 5.418 2.21 2.21 0 00-.65 1.567 4.768 4.768 0 11-5.835-6.985z" fill="#056DFF"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M1.364 12.756A4.768 4.768 0 019.78 12c0 .612.248 1.167.65 1.569a4.768 4.768 0 11-9.065-.814z" fill="#05A1FC"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M7.595 13.825a4.747 4.747 0 012.836-.255c.402.402.957.65 1.57.65a4.768 4.768 0 11-4.406-.396z" fill="#34C759"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M13.594 13.564a4.768 4.768 0 11-1.596.656H12c.614 0 1.17-.248 1.57-.65l.024-.006z" fill="#FFCC01"></path><path opacity="0.  5" fillRule="evenodd" clipRule="evenodd" d="M16.405 10.175a4.768 4.768 0 11-2.836 3.396 2.21 2.21 0 00.651-1.502v-.07a4.747 4.747 0 012.185-1.824z" fill="#FCA41D"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M13.825 7.594a4.768 4.768 0 11.447 4.485L14.221 12c0-.613-.249-1.168-.651-1.57a4.745 4.745 0 01.255-2.836z"     fill="#FF2C55"></path><path opacity="0.5" fillRule="evenodd"     clipRule="evenodd" d="M12.755 1.364a4.768 4.768 0 11.814 9.066A2.212 2.212 0 0012 9.78a4.768 4.768 0 01.755-8.416z" fill="#F249BA"></path>
                    </svg>
                    <span className="text-xl font-bold tracking-wider">studio flow</span>
                </a>
            </li>
            <li className="hidden ml-auto">
                <a href="/login">Login</a>
            </li>
            <li className="hidden">
                <a className="font-bold tracking-widest text-white btn btn-info" href="/signup">Sign    Up</a>
            </li>
        </ul>
    </nav>

</header>
<section className="bg-gray-50">
    <div className="flex flex-col max-w-5xl px-8 py-4 mx-auto lg:px-16">
        <div className="flex flex-col" id="about">
            <h1 className="mt-5 text-4xl font-bold leading-none tracking-tight text-center md:mt-8    lg:text-5xl xl:text-5xl">Easy organization for your photo studio</h1>
            <h3 className="mx-auto mt-4 text-lg font-medium text-center text-gray-600 md:text-2xl     md:max-w-2xl">Spend less time combing through spreadsheets and more time being    creative.</h3>
            <a className="mx-auto font-bold tracking-widest text-white mt-9 btn btn-info" href="/   signup">Get Started</a>
        </div>
        <div className="mx-auto mt-16">
            <img width="600" className="drop-shadow-xl" src="/assets/studio-flow-mockup.png" alt="" />
        </div>
    </div>
</section>
<section className="max-w-5xl px-8 pt-20 pb-8 mx-auto lg:px-16">
    <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold">Why studio flow?</h3>
        <p className="px-4 mx-auto mt-3 text-lg text-gray-700 md:max-w-2xl ">No more spending hours     trying to track down that one elusive error in a sea of formulas. With studio flow, you     can say goodbye to those frustrating spreadsheet woes and hello to a much smoother and    more enjoyable photo studio management experience.</p>
    </div>
    <div className="flex flex-col gap-10 pb-10 mt-12 md:flex-row">
        <div className="text-center">
            <div className="flex mx-auto items-center justify-center h-12 w-12 rounded-full bg-   [#EBF8FE] text-[#3ABFF8]"><svg className="w-6 h-6" strokeWidth="1.5" viewBox="0 0 24 24"   fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 9a.5.5 0 110-1 .5.5 0 010 1zM8.5 9a.5.5 0 110-1 .5.5 0 010 1z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
            <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Easy to use</p>
            <p className="max-w-xs mx-auto mt-2 text-base text-gray-500">Our intuitive and    user-friendly interface makes it easier for you to input and access the data you need.  </p>
        </div>
        <div className="text-center">
            <div className="flex mx-auto items-center justify-center h-12 w-12 rounded-full bg-   [#EBF8FE] text-[#3ABFF8]"><svg className="w-6 h-6" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 6v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"    strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2   6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
            <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Save time</p>
            <p className="max-w-xs mx-auto mt-2 text-base text-gray-500">Organize a shoot in minutes, improve operational efficiency, and reduce your time to market.</p>
        </div>
        <div className="text-center">
            <div className="flex mx-auto items-center justify-center h-12 w-12 rounded-full bg-   [#EBF8FE] text-[#3ABFF8]"><svg className="w-6 h-6" strokeWidth="1.5" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 8v4M12 16.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
            <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Less errors</p>
            <p className="max-w-xs mx-auto mt-2 text-base text-gray-500">No more repetitive manual    entry. Create a shot list using your studio's custom database.</p>
        </div>
    </div>
</section>
</>
  );
}

export default App;
