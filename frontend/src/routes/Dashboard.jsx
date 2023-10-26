import { useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import Header from "../components/Header"

function Dashboard() {

  return (
    <>
      <Header display={"lg:hidden lg:px-16"}/>
      <div className="drawer drawer-mobile h-[93vh] lg:h-screen">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-wrap items-start content-start justify-around p-6 lg:px-10 lg:mt-6">
    {/* Page content here */}

      <h2 className="w-full text-3xl font-bold mb-6">Welcome back, {/*<%- user.username %>*/}</h2>
    {/* <!-- Stats --> */}
    <div className="flex flex-col w-full gap-4 mb-6 md:flex-row md:flex-wrap">
      <div className="stats rounded-lg stat-shadow grow">
        <div className="stat">
          <div className="stat-title text-xs uppercase tracking-wide flex content-center gap-2 mb-2">
            <div className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" fill="none" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="stroke-current"></path><circle cx="128" cy="132" r="36" fill="none" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="stroke-current"></circle></svg>
            </div>
             <span className="leading-5">Shoots this week</span>
          </div>
          <div className="stat-value opacity-100">{/* numShoots */} <span className="font-normal">Shoots</span></div>
        </div>
      </div>
      <div className="stats rounded-lg stat-shadow grow">
        <div className="stat">
          <div className="stat-title text-xs uppercase tracking-wide flex content-center gap-2 mb-2">
            <div className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="84" cy="84" r="12"></circle></svg>
            </div>
             <span className="leading-5">Items this week</span>
          </div>
          <div className="stat-value opacity-100">{/* numItems */}<span className="font-normal">Items</span></div>
        </div>
      </div>
      <div className="stats rounded-lg stat-shadow grow">
        <div className="stat">
          <div className="stat-title text-xs uppercase tracking-wide flex content-center gap-2 mb-2">
            <div className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="stroke-current"></rect><path d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="stroke-current"></path><circle cx="156" cy="100" r="12" className="fill-current"></circle></svg>
            </div>
             <span className="leading-5">Shots this week</span>
          </div>
          <div className="stat-value opacity-100">{/* numShots */} <span className="font-normal">Shots</span></div>
        </div>
      </div>
    </div>

    <h3 className="w-full mb-2 text-xl">This Week's Shoots</h3>
    <div className="w-full overflow-x-auto">
        <table className="table w-full stat-shadow">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Content Type</th>
              <th>Date(s)</th>
              <th>Shot Count</th>
            </tr>
          </thead>
          <tbody>
            {/* <% shoots.forEach( el => { %>
                <tr className="hover" data-id="<%=el._id%>">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div style="background-image:url( <%- `https://source.boringavatar.com/marble/120/${el.startDate.toLocaleDateString([], { month: 'short', timeZone: 'UTC' })}%20${el.startDate.toLocaleDateString([], { day: '2-digit', timeZone: 'UTC' })}?colors=bebdf7,9bc5ff,9bd9fe,adeabc,ffeb99,fedba5,ffabbb,fab6e3&square=true"` %> );" className="mask mask-squircle w-12 h-12">
                          <a href="/shoot/<%=el._id%>">
                            <p className="mt-2 text-black font-black tracking-wider text-center text-xs leading-tight uppercase"><%= el.startDate.toLocaleDateString([], { month: 'short', timeZone: 'UTC' }) %></p> 
                            <p className="text-black font-black tracking-wider text-center text-lg leading-none"><%= el.startDate.toLocaleDateString([], { day: '2-digit', timeZone: 'UTC' }) %></p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                    <td><a href="/shoot/<%=el._id%>"><%= el.shootName %></a></td>
                    <td><div className="badge <%= el.contentType %>"><a href="/shoot/<%=el._id%>"><%= el.contentType %></a></div></td> 
                    <td><a href="/shoot/<%=el._id%>"><%= el.startDate.toLocaleDateString([], { month: 'short',
                      day: '2-digit', timeZone: 'UTC' }) %><%= el.endDate - el.startDate > 0 ? ` - ${el.endDate.toLocaleDateString([], { month: 'short',
                      day: '2-digit', year: 'numeric', timeZone: 'UTC' })}` : `, ${el.startDate.toLocaleDateString([], { year: 'numeric', timeZone: 'UTC' })}` %></a></td>
                    <td>                   
                      <a href="/shoot/<%=el._id%>"><%= el.shot_list.length %></a>
                    </td>
                </tr>
            <% }) %> */}
          </tbody>
        </table>
      </div>
      </div> 
    <div className="drawer-side drawer-shadow">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="p-4 overflow-y-auto bg-white menu w-60 text-base-content">
        {/* Sidebar content here */}
        <li className="hidden lg:flex">
          <a className="hover:bg-transparent" href="/" id="logo">
            <svg className="hover:animate-spin" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" shapeRendering="geometricPrecision" viewBox="0 0 24 24">
              <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M5.014 3.945A4.768 4.768 0 1112 9.78h.002c-.612 0-1.167.248-1.569.65a4.768 4.768 0 01-5.418-6.484z" fill="#5C59EB"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M3.945 5.014a4.768 4.768 0 016.485 5.418 2.21 2.21 0 00-.65 1.567 4.768 4.768 0 11-5.835-6.985z" fill="#056DFF"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M1.364 12.756A4.768 4.768 0 019.78 12c0 .612.248 1.167.65 1.569a4.768 4.768 0 11-9.065-.814z" fill="#05A1FC"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M7.595 13.825a4.747 4.747 0 012.836-.255c.402.402.957.65 1.57.65a4.768 4.768 0 11-4.406-.396z" fill="#34C759"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M13.594 13.564a4.768 4.768 0 11-1.596.656H12c.614 0 1.17-.248 1.57-.65l.024-.006z" fill="#FFCC01"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M16.405 10.175a4.768 4.768 0 11-2.836 3.396 2.21 2.21 0 00.651-1.502v-.07a4.747 4.747 0 012.185-1.824z" fill="#FCA41D"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M13.825 7.594a4.768 4.768 0 11.447 4.485L14.221 12c0-.613-.249-1.168-.651-1.57a4.745 4.745 0 01.255-2.836z" fill="#FF2C55"></path><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M12.755 1.364a4.768 4.768 0 11.814 9.066A2.212 2.212 0 0012 9.78a4.768 4.768 0 01.755-8.416z" fill="#F249BA"></path>
            </svg>
            <span className="text-[1.25rem] font-bold tracking-wider">studio flow</span>
          </a>
        </li>
        <li>
          <a className="group active:bg-black active:text-white" href="/">
            <svg className="stroke-black group-active:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect x="48" y="48" width="64" height="64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><rect x="144" y="48" width="64" height="64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><rect x="48" y="144" width="64" height="64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><rect x="144" y="144" width="64" height="64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a className="group active:bg-black active:text-white" href="/shoot">
            <svg className="stroke-black group-active:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="128" cy="132" r="36" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle></svg>
            Shoots
          </a>
        </li>
        <li>
          <a className="group active:bg-black active:text-white" href="/items">
            <svg className="stroke-black group-active:stroke-white group-active:fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="84" cy="84" r="12"></circle></svg>
            Items
          </a>
        </li>
        <li className="mt-auto">
          <a className="active:bg-black active:text-white" href="/logout">logout</a>
        </li>
      </ul>
    
    </div>
  </div>
    </>
  );
}

export default Dashboard;
