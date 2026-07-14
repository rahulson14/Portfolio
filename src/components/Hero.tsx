"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Github = ({ size = 20 }: { size?: number }) => (
  <svg fill="currentColor" height={size} width={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path d="M-143,145v512h512V145H-143z M244.2,423.4c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7 c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3 c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9 c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2 c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5 C243,374.6,247.3,398.2,244.2,423.4z"></path>
        <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"></path>
      </g>
    </g>
  </svg>
);
const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg fill="currentColor" height={size} width={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 502 502" xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g><g><g>
        <path d="M497,0H5C2.238,0,0,2.239,0,5v492c0,2.761,2.238,5,5,5h492c2.762,0,5-2.239,5-5V5C502,2.239,499.762,0,497,0z M492,492 H10V10h482V492z"></path>
        <path d="M120.503,167.074c0.299,0.006,0.595,0.009,0.893,0.009c11.55,0,22.98-4.709,31.498-13.01 c8.978-8.748,13.937-20.489,13.965-33.06c0.025-12.292-4.783-23.898-13.539-32.681c-8.738-8.765-20.289-13.598-32.524-13.61 c-0.014,0.001-0.021,0-0.032,0c-12.351,0-23.992,4.797-32.779,13.509c-8.808,8.733-13.659,20.315-13.659,32.613 c-0.003,12.582,4.948,24.366,13.94,33.18C96.941,162.53,108.691,167.275,120.503,167.074z M95.026,95.332 c6.902-6.842,16.042-10.61,25.739-10.61c0.007,0,0.016,0,0.024,0c9.561,0.009,18.599,3.799,25.45,10.67 c6.869,6.89,10.641,15.982,10.621,25.599c-0.021,9.858-3.908,19.063-10.944,25.919c-6.85,6.676-16.018,10.38-25.285,10.163 c-0.039-0.001-0.079-0.001-0.118-0.001c-0.034,0-0.068,0.001-0.1,0.001c-9.16,0.198-18.349-3.528-25.146-10.191 c-7.056-6.918-10.942-16.164-10.94-26.038C84.327,111.232,88.127,102.172,95.026,95.332z"></path>
        <path d="M144.728,188.574H96.454c-9.016,0-16.351,7.332-16.351,16.344v205.964c0,9.012,7.335,16.344,16.351,16.344h48.275 c9.015,0,16.349-7.332,16.349-16.344V204.918C161.078,195.906,153.744,188.574,144.728,188.574z M151.078,410.882 c0,3.498-2.849,6.344-6.35,6.344H96.454c-3.502,0-6.351-2.846-6.351-6.344V204.918c0-3.498,2.849-6.344,6.351-6.344h48.274 c3.501,0,6.35,2.846,6.35,6.344V410.882z"></path>
        <path d="M344.488,182.733h-12.381c-21.804,0-42.415,9.576-56.492,25.938v-10.39c0-5.355-4.357-9.712-9.712-9.712h-60.236 c-5.353,0-9.707,4.357-9.707,9.712V417.52c0,5.344,4.35,9.701,9.706,9.712l61.55,0.016c5.353,0,9.707-4.358,9.707-9.714v-126.66 c0-19.261,15.437-35.106,34.413-35.322c9.474-0.076,18.338,3.514,25.022,10.198c6.574,6.569,10.194,15.311,10.194,24.617V417.55 c0,5.343,4.35,9.7,9.706,9.712l61.692,0.011c0.008,0,0.014,0,0.021,0c2.585,0,5.015-1.005,6.847-2.832 c1.838-1.835,2.851-4.276,2.851-6.875V391c0-2.761-2.238-5-5-5c-2.762,0-5,2.239-5,5v26.273l-61.116-0.011V290.366 c0-11.978-4.661-23.232-13.125-31.689c-8.601-8.601-20.017-13.271-32.205-13.125c-24.427,0.278-44.3,20.608-44.3,45.321v126.373 l-60.963-0.016V198.568h59.655v24.994c0,3.31,3.125,5.413,6.236,5.044c1.808-0.215,3.096-1.341,3.967-2.873 c1.039-1.826,2.139-3.614,3.344-5.337c12.071-17.323,31.864-27.664,52.945-27.664h12.381c40.277,0,73.059,32.701,73.187,72.945 c-0.004,0.078-0.006,0.157-0.006,0.236V289c0,2.761,2.238,5,5,5c2.762,0,5-2.239,5-5v-22.842 c0.004-0.081,0.006-0.162,0.006-0.244C427.675,220.048,390.357,182.733,344.488,182.733z"></path>
        <path d="M422.668,323c-2.762,0-5,2.239-5,5v27c0,2.761,2.238,5,5,5c2.762,0,5-2.239,5-5v-27 C427.668,325.239,425.43,323,422.668,323z"></path>
        <path d="M408,51h43c2.762,0,5-2.239,5-5s-2.238-5-5-5h-43c-2.762,0-5,2.239-5,5S405.238,51,408,51z"></path>
        <path d="M200,51h158c2.762,0,5-2.239,5-5s-2.238-5-5-5H200c-2.762,0-5,2.239-5,5S197.238,51,200,51z"></path>
      </g></g></g>
    </g>
  </svg>
);
const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg fill="currentColor" height={size} width={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M-143,145v512h512V145H-143z M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7 c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5 c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6 c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12 c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1 c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path>
    </g>
  </svg>
);
const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg fill="currentColor" height={size} width={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 502 502" xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g><g><g>
        <path d="M497,0H5C2.239,0,0,2.239,0,5v492c0,2.761,2.239,5,5,5h492c2.762,0,5-2.239,5-5V5C502,2.239,499.762,0,497,0z M492,492 H10V10h482V492z"></path>
        <path d="M169.817,417.314h162.366c46.941,0,85.13-38.189,85.13-85.132V169.817c0-46.942-38.19-85.132-85.131-85.132H169.817 c-46.942,0-85.132,38.19-85.132,85.132v162.365C84.685,379.124,122.875,417.314,169.817,417.314z M94.685,169.818 c0-41.428,33.704-75.132,75.132-75.132v-0.001h162.365c41.428,0,75.131,33.704,75.131,75.132v162.366 c0,41.428-33.703,75.132-75.131,75.132H169.817c-41.428,0-75.132-33.704-75.132-75.132V169.818z"></path>
        <path d="M169.817,465.467h162.366c73.494,0,133.285-59.791,133.284-133.285V169.817c0-73.493-59.791-133.285-133.285-133.285 H169.817c-73.493,0-133.285,59.792-133.285,133.285v162.365C36.532,405.675,96.324,465.467,169.817,465.467z M46.532,169.818 c0-67.98,55.306-123.285,123.285-123.285v-0.001h162.365c67.979,0,123.285,55.306,123.285,123.285v162.366 c0,67.98-55.306,123.285-123.285,123.285H169.817c-67.98,0-123.285-55.306-123.285-123.285V169.818z"></path>
        <path d="M350.968,173c12.113,0,21.968-9.854,21.968-21.968s-9.854-21.968-21.968-21.968c-12.114,0-21.968,9.854-21.968,21.968 S338.854,173,350.968,173z M350.968,139.064c6.598,0,11.968,5.369,11.968,11.968S357.567,163,350.968,163 S339,157.631,339,151.032S344.369,139.064,350.968,139.064z"></path>
        <path d="M175.333,381c2.762,0,5-2.239,5-5s-2.239-5-5-5C150.888,371,131,351.112,131,326.666V236c0-2.761-2.239-5-5-5 s-5,2.239-5,5v90.667C121,356.626,145.374,381,175.333,381z"></path>
        <path d="M126,200c2.761,0,5-2.239,5-5v-19.667c0-2.761-2.239-5-5-5s-5,2.239-5,5V195C121,197.761,123.239,200,126,200z"></path>
        <path d="M327.922,217.027c0.827,1.865,2.656,2.974,4.573,2.974c0.677,0,1.365-0.138,2.025-0.431 c2.524-1.119,3.663-4.074,2.543-6.598c-3.542-7.986-8.187-15.448-13.805-22.179c-1.77-2.119-4.922-2.404-7.043-0.634 c-2.12,1.769-2.405,4.922-0.635,7.042C320.604,203.219,324.756,209.89,327.922,217.027z"></path>
        <path d="M251,199.287c-28.514,0-51.713,23.199-51.713,51.713s23.198,51.713,51.713,51.713s51.714-23.199,51.714-51.713 S279.514,199.287,251,199.287z M251,292.713c-23.001,0-41.713-18.712-41.713-41.713s18.712-41.713,41.713-41.713 c23.001,0,41.714,18.712,41.714,41.713S274.001,292.713,251,292.713z"></path>
        <path d="M251,345.092c51.883,0,94.092-42.21,94.093-94.092c0-2.761-2.238-5-5-5c-2.762,0-5,2.239-5,5 c0,46.368-37.724,84.092-84.092,84.092c-46.368,0-84.092-37.724-84.092-84.092c0-46.368,37.724-84.092,84.092-84.092 c12.534,0,24.599,2.704,35.86,8.036c2.495,1.181,5.476,0.117,6.658-2.379c1.183-2.496,0.117-5.477-2.379-6.659 c-12.61-5.971-26.115-8.998-40.14-8.998c-51.883,0-94.092,42.209-94.092,94.092S199.118,345.092,251,345.092z"></path>
      </g></g></g>
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section className="pt-28 pb-12 md:pt-40 md:pb-24 min-h-[640px] overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          Mobile: column-reverse so image appears on top 
          Desktop: row, image to the right, top-aligned with text
        */}
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-12 md:gap-8">
          
          {/* Text column - on mobile comes after image, on desktop left side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter">
              <span className="font-normal">Hello I&apos;am</span>{" "}
              <span className="font-black block sm:inline">Rahul Son Boro.</span>
              <br className="hidden sm:block" />
              <span className="font-black">Software</span>{" "}
              <span className="font-black text-transparent text-outline">Engineer</span>
              <br />
              <span className="font-normal">Based In</span>{" "}
              <span className="font-black">India.</span>
            </h1>
            
            <p className="text-zinc-500 text-sm md:text-base lg:text-lg mt-6 mb-8 max-w-lg leading-relaxed">
              I am a Computer Science graduate specializing in Web Development, Machine Learning, and AI Agents. I engineer scalable applications and intelligent systems to solve complex, real-world problems.
            </p>

            {/* Original square icon style */}
            <div className="inline-flex gap-4">
              {[
                { icon: Github, href: "https://github.com/rahulson14", label: "Github" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rahulsonboro/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfjM9D0dxQPKFMgWP%2FYkAtA%3D%3D", label: "Linkedin" },
                { icon: Twitter, href: "https://x.com/rahulsonboro", label: "Twitter" },
                { icon: Instagram, href: "https://www.instagram.com/rahulsonboro/", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  aria-label={social.label}
                  className="transition-colors text-black hover:text-zinc-600"
                >
                  <social.icon size={48} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image column - on mobile appears first, on desktop right side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Use aspect ratio that fits your illustration */}
              <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-square">
                <Image 
                  src="/assets/Group 1000015839.png" 
                  alt="Rahul Son Boro Illustration" 
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}