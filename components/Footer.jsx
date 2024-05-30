import Link from 'next/link'
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      link: 'https://www.facebook.com/profile.php?id=61550563621219',
      icon: <FaFacebook size={20} />
    },
    {
      id: 2,
      link: 'https://github.com/bulbul32123',
      icon: <FaGithub size={20} />
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/webdevwithbulbul/',
      icon: <FaLinkedin size={20} />
    },
  ]
  const staticLink = [
    {
      id: 1,
      title: 'Support',
      links: ['Documentation', 'Chat', 'FAQ']
    },
    {
      id: 2,
      title: 'Legal',
      links: ['Terms of Service',
        'Privacy Policy',
        'Cookie settings']
    },
  ]
  return (
    <>
      <footer className="bg-white">
        <div className="bg-gray-800 py-6">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <div className="mb-3 text-center md:mb-0 md:text-left">
                <span className="font-bold uppercase tracking-widest text-white">Newsletter</span>
                <p className="text-gray-300">Subscribe to our newsletter</p>
              </div>

              <form className="flex w-full gap-2 md:max-w-md" id='footerForm'>
                <input placeholder="Email" className="w-full flex-1 rounded border border-white  px-3 py-2 text-black outline-none ring-green-300 transition duration-100 focus:ring" />

                <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-green-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-green-600 md:text-base">Send</button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 lg:pt-16">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-full lg:col-span-2">
                {/* <!-- logo - start --> */}
                <div className="mb-4 lg:-mt-2">
                  <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl">
                    EKart
                  </Link>
                </div>
                {/* <!-- logo - end --> */}

                <p className="mb-6 text-gray-500 sm:pr-8">EKart is the best online store where you can find Headphoes, Watches and Earbuds.Explore Our All Products.</p>

                {/* <!-- social - start --> */}
                <div className="flex gap-4">
                  {socialLinks.map((lik,index) =>
                    <a href={lik.link} target="_blank" key={lik.id} className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                      <span>{lik.icon}</span>
                    </a>
                  )
                  }
                </div>
                {/* <!-- social - end --> */}
              </div>

              {/* <!-- nav - start --> */}
              <div>
                <h3 className="mb-4 font-bold uppercase tracking-widest text-gray-800">Pages</h3>

                <nav className="flex flex-col gap-4">
                  <div>
                    <Link href="/" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600">Home</Link>
                  </div>

                  <div>
                    <Link href="/about" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600">About</Link>
                  </div>

                  <div>
                    <Link href="/contact" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600">Contact</Link>
                  </div>
                </nav>
              </div>
              {/* <!-- nav - end --> */}

              {/* <!-- nav - start --> */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Categories</div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <Link href="/products?category=headphone&brand=all&color=all&feature=all&condition=all&sort_by=desc" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600">Headphones</Link>
                  </div>

                  <div>
                    <Link href="/products?category=earbud&brand=all&color=all&feature=all&condition=all&sort_by=desc" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600">Earbuds</Link>
                  </div>

                  <div>
                    <Link href="/products?category=watch&brand=all&color=all&feature=all&condition=all&sort_by=desc" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600">Watches</Link>
                  </div>
                </nav>
              </div>
              {/* <!-- nav - end --> */}
              {/* <!-- nav - start --> */}
              {staticLink.map((li) => (
                <div key={li.id}>
                  <h3 className="mb-4 font-bold uppercase tracking-widest text-gray-800">{li.title}</h3>
                  <nav className="flex flex-col gap-4">
                    {
                      li.links.map((i, index) => (
                        <div key={index}>
                          <Link href="/" className="text-gray-500 transition duration-100 hover:text-green-500 active:text-indigo-600" >{i}</Link>
                        </div>
                      ))
                    }
                  </nav>
                </div>
              ))
              }
              {/* <!-- nav - end --> */}
            </div>

            <div className="border-t py-8 text-center text-sm text-gray-400">© 2024 - Present EKart. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
