import React from 'react'

const Preloader = () => {
    return (
        <main className='px-4 py-5 flex items-center justify-center' style={{ height: `calc(100vh - 5rem)` }}>
            <div className='container mx-auto'>
                <div id="spinner" className='max-w-md mx-auto w-16 h-16 border-4 border-blue-800 rounded-full animate-spin'></div>
            </div>


        </main>
    )
}

export default Preloader
