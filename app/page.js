"use client"

import React from 'react'

const Page = () => {
  return (
    <div
      className="w-full min-h-screen bg-white text-[#202124] flex items-center justify-center px-6 py-12"
      style={{ fontFamily: 'Roboto, Arial, sans-serif' }}
    >
      <div className="w-full max-w-2xl">
        {/* Sad document icon (Chrome-style) */}
        <div className="mb-8 text-[#9aa0a6]">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 6h32l14 14v46H14z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M46 6v14h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <line x1="26" y1="40" x2="32" y2="46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="32" y1="40" x2="26" y2="46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="42" y1="40" x2="48" y2="46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="48" y1="40" x2="42" y2="46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M27 58 Q37 51 47 58" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-2xl md:text-[28px] font-normal text-[#202124] mb-6 leading-tight">
          Не удается получить доступ к сайту
        </h1>

        <p className="text-[15px] text-[#5f6368] leading-relaxed mb-1">
          Проверьте, нет ли опечаток в имени хоста <span className="text-[#202124]">avenew.md</span>.
        </p>

        <p className="text-[13px] text-[#5f6368] mt-8 uppercase tracking-wider font-medium">
          DNS_PROBE_FINISHED_NXDOMAIN
        </p>

        <div className="flex justify-end mt-12">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#1a73e8] hover:bg-[#1765cc] text-white text-[14px] font-medium rounded-full transition-colors"
          >
            Перезагрузить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
