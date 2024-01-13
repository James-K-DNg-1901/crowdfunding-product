/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import MLogo from '../../assets/logo-mastercraft.svg'
import bookmark from '../../assets/icon-bookmark.svg'
import closeModal from '../../assets/icon-close-modal.svg'
import check from '../../assets/icon-check.svg'

class Main extends React.Component {

  noReward = () => {
    document.getElementById('s1').classList.remove('hidden')
    document.getElementById('no-reward').classList.toggle('border-cyan-500')
    document.getElementById('no-reward-check').classList.toggle('bg-cyan-500')
    document.getElementById('bamboo').classList.remove('border-cyan-500')
    document.getElementById('bamboo-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo-hidden-box').classList.add('hidden')
    document.getElementById('black').classList.remove('border-cyan-500')
    document.getElementById('black-check').classList.remove('bg-cyan-500')
    document.getElementById('black-hidden-box').classList.add('hidden')
  }
  select1 = () => {
    document.getElementById('main').classList.add('hidden')
    document.getElementById('s1').classList.remove('hidden')
    document.getElementById('no-reward').classList.remove('border-cyan-500')
    document.getElementById('no-reward-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo').classList.toggle('border-cyan-500')
    document.getElementById('bamboo-check').classList.toggle('bg-cyan-500')
    document.getElementById('bamboo-hidden-box').classList.toggle('hidden')
    document.getElementById('black').classList.remove('border-cyan-500')
    document.getElementById('black-check').classList.remove('bg-cyan-500')
    document.getElementById('black-hidden-box').classList.add('hidden')
  }
  select2 = () => {
    document.getElementById('main').classList.add('hidden')
    document.getElementById('s1').classList.remove('hidden')
    document.getElementById('no-reward').classList.remove('border-cyan-500')
    document.getElementById('no-reward-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo').classList.remove('border-cyan-500')
    document.getElementById('bamboo-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo-hidden-box').classList.add('hidden')
    document.getElementById('black').classList.toggle('border-cyan-500')
    document.getElementById('black-check').classList.toggle('bg-cyan-500')
    document.getElementById('black-hidden-box').classList.toggle('hidden')
  }
  modalHandle = () => {
    document.getElementById('main').classList.toggle('hidden')
    document.getElementById('s1').classList.toggle('hidden')
    document.getElementById('no-reward').classList.remove('border-cyan-500')
    document.getElementById('no-reward-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo').classList.remove('border-cyan-500')
    document.getElementById('bamboo-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo-hidden-box').classList.add('hidden')
    document.getElementById('black').classList.remove('border-cyan-500')
    document.getElementById('black-check').classList.remove('bg-cyan-500')
    document.getElementById('black-hidden-box').classList.add('hidden')
  }
  gotIt = () => {
    document.getElementById('main').classList.remove('hidden')
    document.getElementById('s2').classList.toggle('hidden')
    document.getElementById('s1').classList.add('hidden')
    document.getElementById('bamboo').classList.remove('border-cyan-500')
    document.getElementById('bamboo-check').classList.remove('bg-cyan-500')
    document.getElementById('bamboo-hidden-box').classList.add('hidden')
    document.getElementById('black').classList.remove('border-cyan-500')
    document.getElementById('black-check').classList.remove('bg-cyan-500')
    document.getElementById('black-hidden-box').classList.add('hidden')
  }
  
  render() {
    return (
      <>
        <main id='main' className='w-full h-auto absolute top-72 max-md:top-64 flex items-start justify-center'>
          <div className='md:w-100 w-80 h-auto transition-all ease-in-out duration-500 flex flex-col gap-8'>
            <div className='w-full h-64 max-md:h-72 bg-white rounded-md text-center gap-7 max-md:gap-3 relative flex flex-col justify-center items-center'>
                <div className='bg-black w-14 rounded-full absolute -top-8 md:right-73 right-32 transition-all ease-in-out duration-500'>
                  <img src={MLogo} alt="M-logo" />
                </div>
                <h1 className='text-2xl font-bold max-md:mt-8'>Mastercraft Bamboo Monitor Riser</h1>
                <p className=' text-slate-500'>A beatiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className='w-full h-14 max-md:h-24 flex justify-between px-8 max-md:p-5'>
                  <div onClick={() => this.modalHandle()}
                    className='py-4 px-10 bg-cyan-500 rounded-full text-white font-bold cursor-pointer hover:bg-cyan-700'>
                    Back this project
                  </div>
                  <div className='flex items-center gap-5 pr-5 max-md:gap-0 max-md:pr-0 bg-slate-300 rounded-full cursor-pointer hover:bg-slate-500 hover:border-cyan-500 hover:border-2'>
                    <img className=' hover:fill-cyan-700' src={bookmark} alt="bookmark" />
                    <div className='max-md:hidden'>Bookmark</div>
                  </div>
                </div>
            </div>

            <div className='w-full h-40 max-md:h-96 bg-white rounded-md py-7 px-12 max-md:px-7 flex flex-col gap-8'>
              <div className='flex max-md:text-center max-md:flex-col max-md:items-center max-md:justify-center gap-5'>
                <div className='w-40 max-md:w-auto flex max-md:flex-col gap-6'>
                  <div>
                    <h2 className='text-3xl font-bold'>$89,914</h2>
                    <p className='text-slate-400 text-sm'>of $100,000 backed</p>
                  </div>
                  <hr className='w-auto  border-slate-400' />
                </div>
                <div className='w-40 max-md:w-auto flex max-md:flex-col gap-6'>
                  <div>
                    <h2 className='text-3xl font-bold'>5,007</h2>
                    <p className='text-slate-400 text-sm'>total backers</p>
                  </div>
                  <hr className='w-auto max-md:translate border-slate-400' />
                </div>
                <div className='w-40 max-md:w-auto flex max-md:flex-col gap-6'>
                  <div>
                    <h2 className='text-3xl font-bold'>56</h2>
                    <p className='text-slate-400 text-sm'>days left</p>
                  </div>
                </div>
              </div>
              <div className='w-full h-3 bg-slate-300 rounded-full'>
                <div className='w-96 max-md:w-44 h-full bg-cyan-500 rounded-full transition-all ease-in-out duration-500'></div>
              </div>
            </div>

            <div className='w-full h-auto bg-white rounded-md py-7 px-12 max-md:px-7 flex flex-col gap-5'>
              <h2 className='text-xl font-bold'>About this project</h2>
              <p className='text-slate-500 leading-6 tracking-wider'>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
              </p>
              <p className='text-slate-500 leading-6 tracking-wider'>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
              </p>
              <div className='w-full border-2 border-slate-400 rounded-md p-7 flex flex-col gap-5'>
                <div className='flex justify-between max-md:flex-col gap-3'> 
                  <h3 className='text-xl font-bold'>Bamboo Stand</h3>
                  <p className='text-cyan-500'>Pledge $25 or more</p>
                </div>
                <p className='text-slate-500'>
                  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                  you'll be added to a special Backer member list.
                </p>
                <div className='flex md:justify-between md:items-center max-md:flex-col gap-6'> 
                  <h3 className='text-2xl font-bold'>101 <span className='text-sm text-slate-400 font-normal'>left</span></h3>
                  <button onClick={() => this.select1()}
                   className='bg-cyan-600 hover:bg-cyan-700 max-md:w-44 px-7 py-4 rounded-full cursor-pointer text-white font-bold'>
                    Select Reward 
                  </button>
                </div>
              </div>

              <div className='w-full border-2 border-slate-400 rounded-md p-7 flex flex-col gap-5'>
                <div className='flex justify-between max-md:flex-col gap-3'> 
                  <h3 className='text-xl font-bold'>Black Edition Stand</h3>
                  <p className='text-cyan-500'>Pledge $75 or more</p>
                </div>
                <p className='text-slate-500'>
                  You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer 
                  member list. Shipping is included.
                </p>
                <div className='flex md:justify-between md:items-center max-md:flex-col gap-6'> 
                  <h3 className='text-2xl font-bold'>64 <span className='text-sm text-slate-400 font-normal'>left</span></h3>
                  <div onClick={() => this.select2()} 
                  className='bg-cyan-600 hover:bg-cyan-700 max-md:w-44 px-7 py-4 rounded-full cursor-pointer text-white font-bold'>
                    Select Reward 
                  </div>
                </div>
              </div>

              <div className='w-full border-2 border-slate-400 rounded-md p-7 flex flex-col gap-5'>
                <div className='flex justify-between max-md:flex-col gap-3'> 
                  <h3 className='text-xl font-bold text-slate-400'>Mahogany Special Edition</h3>
                  <p className='text-cyan-200'>Pledge $200 or more</p>
                </div>
                <p className='text-slate-300'>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added 
                  to our Backer member list. Shipping is included.
                </p>
                <div className='flex md:justify-between md:items-center max-md:flex-col gap-6'> 
                  <h3 className='text-2xl font-bold text-slate-500'>0 <span className='text-sm text-slate-400 font-normal'>left</span></h3>
                  <div className='bg-slate-300 max-md:w-44 px-7 py-4 rounded-full text-white font-bold'>
                    Select Reward 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* section 1 */}
        <section id='s1' className='absolute w-full hidden'>
          <div className='static w-full bg-slate-700 bg-opacity-50 z-30 flex justify-center items-center'>
            <div className='w-100 h-auto bg-white rounded-md py-5 px-10 max-md:px-3'>
              <img onClick={() => this.modalHandle()} className='float-right cursor-pointer' src={closeModal} alt="close" />
              <h1 className='text-2xl font-bold my-2 max-md:text-lg'>Back this project</h1>
              <p className='text-slate-500 mb-8 max-md:text-sm'>Want to support us in bring Mastercraft Bamboo Monitor Rise cut in the world ?</p>
              <div id='no-reward' className='flex justify-between items-start gap-6 border-2 rounded-md p-6 max-md:p-2 my-2'>
                <div onClick={() => this.noReward()}  id='no-reward-check' className='w-12 h-6 border-2 rounded-full cursor-pointer hover:bg-cyan-500'></div>
                <div>
                  <h2 onClick={() => this.noReward()}  className='text-xl font-bold cursor-pointer hover:text-cyan-500 max-md:text-lg'>Pledge with no reward</h2>
                  <p className='text-slate-500 max-md:text-xs'>
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                  </p>
                </div>
              </div>

              <div id='bamboo' className=' border-2 rounded-md p-4 max-md:p-2 my-2'>
                <div className='flex justify-between items-start gap-6'>
                  <div onClick={() => this.select1()}  id='bamboo-check' className='w-12 h-6 border-2 rounded-full cursor-pointer hover:bg-cyan-500'></div>
                  <div>
                    <h2 onClick={() => this.select1()}  className='text-xl font-bold mb-4 cursor-pointer hover:text-cyan-500 max-md:text-lg max-md:flex max-md:flex-col'>Bamboo Stand <span className='text-sm font-normal text-cyan-600 ml-3 mr-36 max-md:mx-0'>pledge $25 or more</span> <span>101 <span className=' text-sm font-normal text-slate-500'>left</span></span></h2>
                    <p className='text-slate-500 text-sm mb-8 max-md:text-xs'>
                      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                      you'll be added to a special Backer member list.
                    </p>
                  </div>
                </div>
                <div id='bamboo-hidden-box' className='hidden'>
                  <hr />
                  <div className='flex justify-between items-center pt-5 max-md:flex max-md:flex-col gap-2'>
                    Enter your pledge
                    <div className='flex gap-3'>
                      <input className='w-28 h-16 border-2 p-5 rounded-full text-center' type="number" placeholder='$' />
                      <div onClick={() => this.gotIt()}
                        className='w-28 h-16 p-5 rounded-full bg-cyan-600 text-white font-bold cursor-pointer hover:bg-cyan-700'>
                        Continue
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='black' className=' border-2 rounded-md p-4 max-md:p-2 my-2'>
                <div className='flex justify-between items-start gap-6'>
                  <div onClick={() => this.select2()}  id='black-check' className='w-10 h-6 border-2 rounded-full cursor-pointer hover:bg-cyan-500'></div>
                  <div>
                    <h2 onClick={() => this.select2()} className='text-xl font-bold mb-4  cursor-pointer hover:text-cyan-500 max-md:text-lg max-md:flex max-md:flex-col'>Black Edition Stand <span className='text-sm font-normal text-cyan-600 ml-3 mr-28 max-md:mx-0'>pledge $75 or more</span> <span>64 <span className=' text-sm font-normal text-slate-500'>left</span></span></h2>
                    <p className='text-slate-500 text-sm mb-8 max-md:text-xs'>
                      You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer
                      member list. Shipping is included.
                    </p>
                  </div>
                </div>
                <div id='black-hidden-box' className='hidden'>
                  <hr />
                  <div className='flex justify-between items-center pt-5 max-md:flex max-md:flex-col gap-2'>
                    Enter your pledge
                    <div className='flex gap-3'>
                      <input className='w-28 h-16 border-2 p-5 rounded-full text-center' type="number" placeholder='$' />
                      <div onClick={() => this.gotIt()}
                        className='w-28 h-16 p-5 rounded-full bg-cyan-600 text-white font-bold cursor-pointer hover:bg-cyan-700'>
                        Continue
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' border-2 rounded-md p-4 max-md:p-2 my-2 text-slate-500'>
                <div className='flex justify-between items-start gap-6'>
                  <div className='w-10 h-6 border-2 rounded-full'></div>
                  <div>
                    <h2 className='text-xl font-bold mb-4 max-md:text-lg max-md:flex max-md:flex-col'>Mahogany Special Edition<span className='text-sm font-normal text-cyan-600 ml-3 mr-14 max-md:mx-0'>pledge $200 or more</span> <span>0 <span className=' text-sm font-normal text-slate-500'>left</span></span></h2>
                    <p className='text-slate-500 text-sm mb-8 max-md:text-xs'>
                      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added
                      to our Backer member list. Shipping is included.
                    </p>
                  </div>
                </div>
                <div className='hidden'>
                  <hr />
                  <div className='flex justify-between items-center pt-5 max-md:flex max-md:flex-col gap-2'>
                    Enter your pledge
                    <div className='flex gap-3'>
                      <input className='w-28 h-16 border-2 p-5 rounded-full text-center' type="number" placeholder='$' />
                      <div className='w-28 h-16 p-5 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-700'>
                        Continue
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* section 2 */}

        <section id='s2' className='hidden'>
          <div className='fixed w-full h-full bg-slate-700 bg-opacity-50 z-30  flex justify-center items-center'>
            <div className='w-96 h-auto bg-white rounded-md py-7 px-10 flex flex-col justify-center items-center text-center gap-7'>
              <img src={check} alt='complete' />
              <h1 className='text-xl font-bold '>Thanks for your support!</h1>
              <p className='text-slate-500'>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
              </p>
              <div onClick={() => this.gotIt()}
              className='font-bold text-white px-6 py-4 rounded-full bg-cyan-600 hover:bg-cyan-700 cursor-pointer'>
                Got it
                </div>
            </div>
          </div>
        </section>

      </>

    )
  }
}
export default Main