"use client"
import React, { useState } from 'react';
import { 
  Menu, X, CheckCircle2, Star, Phone, MapPin, 
  Navigation, Bookmark, Globe, ArrowRight, Play, Heart,
  ChartNoAxesGantt,Share2
} from 'lucide-react';

const BusinessProfileLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#202124] selection:bg-blue-100 font-sans">
   

      {/* HERO SECTION */}
      <header className="relative overflow-hidden  pb-24 bg-gradient-to-b from-gray-50 to-white pt-30 md:pt-45" >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-[40px] lg:text-6xl font-semibold leading-[1.1] tracking-tight  text-gray-900">
              Live Your Business  
              <span className="text-blue-600 ml-3">on Google Maps Today</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Convert searches into customers. Create a free Business Profile that highlights your best features across Google Search and Maps.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
           
              <button  className="group bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-4 rounded-full transition-all flex items-center gap-x-3 hover:gap-x-5 shadow-xl shadow-blue-200 cursor-pointer">
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full shadow-sm text-blue-600">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch how it works
              </button>
            </div>

         
          </div>

          {/* PHONE MOCKUP */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="absolute -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-[320px] bg-[#1f2937] p-3 rounded-[3rem] shadow-2xl border-4 border-gray-800">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="h-6 w-full bg-white flex justify-center items-end pb-1">
                  <div className="w-16 h-4 bg-gray-100 rounded-full" />
                </div>
                
                <div className="p-4 space-y-4">
                  <div className="flex gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=150&q=80" 
                      className="w-16 h-16 rounded-xl object-cover shadow-sm"
                      alt="Business"
                    />
                    <div>
                      <h3 className="font-bold text-lg leading-tight">Detroit Voltage</h3>
                      <div className="flex items-center gap-x-1 text-green-700 text-sm">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-gray-400">(42)</span>
                      </div>
                      <p className="text-xs text-gray-500">Electrician in Detroit</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: Phone, label: 'CALL' },
                      { icon: Navigation, label: 'DIRECTIONS' },
                      { icon: Bookmark, label: 'SAVE' },
                      { icon: Globe, label: 'WEBSITE' }
                    ].map((btn, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                          <btn.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-bold text-blue-600">{btn.label}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 text-white rounded-full py-2.5 text-sm font-semibold shadow-md">
                    REQUEST A QUOTE
                  </button>

                  <div className="space-y-3 pt-2 border-t text-xs">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>400 Monroe St, Detroit, MI 48226</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-700 font-medium italic">Open • Closes 5 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

     <BusinessSetupSection/>

     

    </div>
  );
};

export default BusinessProfileLanding;




interface TabContent {
  id: string;
  title: string;
  description: string;
  businessName: string;
  rating: number;
  images: string[];
  attribute?: string;
}

const tabsData: TabContent[] = [
  {
    id: 'essential-info',
    title: 'Add essential info',
    description: '',
    businessName: 'Yogolandia Yogurt and Botana Bar',
    rating: 5,
    images: [
      '/placeholder-yogurt.jpg',
      '/placeholder-dessert.jpg',
      '/placeholder-bowl.jpg',
      '/placeholder-fruit.jpg',
      '/placeholder-smoothie.jpg',
      '/placeholder-dish.jpg',
    ],
    attribute: undefined,
  },
  {
    id: 'photos-logos',
    title: 'Share photos and logos',
    description:
      "Show your business's personality with photos, a cover image, your logo, and more to stand out to customers.",
    businessName: 'Yogolandia Yogurt and Botana Bar',
    rating: 5,
    images: [
      '/placeholder-yogurt.jpg',
      '/placeholder-dessert.jpg',
      '/placeholder-bowl.jpg',
      '/placeholder-fruit.jpg',
      '/placeholder-smoothie.jpg',
      '/placeholder-dish.jpg',
    ],
    attribute: undefined,
  },
  {
    id: 'show-who',
    title: 'Show who you are',
    description:
      'Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business.',
    businessName: 'Fashionista',
    rating: 5,
    images: ['/placeholder-fashion.jpg'],
    attribute: 'Identifies as women-owned',
  },
];

function BusinessSetupSection() {
  const [activeTab, setActiveTab] = useState('photos-logos');

  const activeContent = tabsData.find((tab) => tab.id === activeTab) || tabsData[1];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left Side - Navigation */}
          <div className="space-y-2">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="cursor-pointer group"
              >
                <div
                  className={`relative pl-6 py-5 transition-all duration-300 ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-40 hover:opacity-60'
                  }`}
                >
                  {/* Active Indicator */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-blue-600 transition-all duration-300 ${
                      activeTab === tab.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                    }`}
                  />

                  {/* Content */}
                  <div className="space-y-3">
                    <h2
                      className={`text-3xl lg:text-4xl font-light transition-colors duration-300 ${
                        activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {tab.title}
                    </h2>

                    {activeTab === tab.id && tab.description && (
                      <p className="text-gray-600 leading-relaxed max-w-lg text-base animate-fadeIn">
                        {tab.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Preview Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Business Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate mb-2">
                      {activeContent.businessName}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(activeContent.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md">
                      76+
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              {activeContent.id !== 'show-who' && (
                <div className="border-b border-gray-100 px-5">
                  <div className="flex gap-6">
                    <button className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors">
                      Overview
                    </button>
                    <button className="py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                      Photos
                    </button>
                  </div>
                </div>
              )}

              {/* Content Area */}
              {activeContent.id !== 'show-who' ? (
                <>
                  {/* Filter Pills */}
                  <div className="px-5 py-4 border-b border-gray-50">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                      <FilterPill label="All" icon="🍦" active />
                      <FilterPill label="All" icon="👤" />
                      <FilterPill label="Latest" icon="👤" />
                      <FilterPill label="Menu" icon="🍽️" />
                      <FilterPill label="" icon="👤" />
                    </div>
                  </div>

                  {/* Photo Grid */}
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-2.5 auto-rows-[140px]">
                      {activeContent.images.map((img, index) => (
                        <div
                          key={index}
                          className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer ${
                            index === 1 ? 'row-span-2' : ''
                          }`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${
                              index % 4 === 0
                                ? 'from-orange-300 to-orange-400'
                                : index % 4 === 1
                                ? 'from-amber-300 to-amber-400'
                                : index % 4 === 2
                                ? 'from-sky-300 to-sky-400'
                                : 'from-pink-300 to-pink-400'
                            }`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-80">
                              {index % 4 === 0
                                ? '🥗'
                                : index % 4 === 1
                                ? '🍰'
                                : index % 4 === 2
                                ? '🍦'
                                : '🥘'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Overview Tab */}
                  <div className="px-5 py-4 border-b border-gray-50">
                    <button className="py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                      Overview
                    </button>
                  </div>

                  <div className="p-5 space-y-5">
                    {/* Cover Image */}
                    <div className="relative h-36 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center gap-4 text-4xl">
                        👗 👔 👚 👕
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-3">
                      <ActionBtn icon={<Phone className="w-5 h-5" />} label="Call" />
                      <ActionBtn icon={<Navigation className="w-5 h-5" />} label="Directions" />
                      <ActionBtn icon={<Share2 className="w-5 h-5" />} label="Share" />
                      <ActionBtn icon={<Globe className="w-5 h-5" />} label="Website" />
                    </div>

                    {/* Info Checkmarks */}
                    <div className="flex items-center gap-10 py-3 text-gray-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Attribute Badge */}
                    <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-11 h-11 bg-purple-100 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 fill-purple-600 text-purple-600" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{activeContent.attribute}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
        active
          ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span className="text-base">{icon}</span>
      {label && <span>{label}</span>}
    </button>
  );
}

function ActionBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
      <div className="text-blue-600 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-[10px] text-gray-600 font-medium">{label}</span>
    </button>
  );
}


// interface TabContent {
//   id: string;
//   title: string;
//   description: string;
//   businessName: string;
//   rating: number;
//   images: string[];
//   attribute?: string;
// }

// const tabsData: TabContent[] = [
//   {
//     id: 'essential-info',
//     title: 'Add essential info',
//     description: '',
//     businessName: 'Yogolandia Yogurt and Botana Bar',
//     rating: 5,
//     images: [
//       '/placeholder-yogurt.jpg',
//       '/placeholder-dessert.jpg',
//       '/placeholder-bowl.jpg',
//       '/placeholder-fruit.jpg',
//       '/placeholder-smoothie.jpg',
//       '/placeholder-dish.jpg',
//     ],
//     attribute: undefined,
//   },
//   {
//     id: 'photos-logos',
//     title: 'Share photos and logos',
//     description:
//       "Show your business's personality with photos, a cover image, your logo, and more to stand out to customers.",
//     businessName: 'Yogolandia Yogurt and Botana Bar',
//     rating: 5,
//     images: [
//       '/placeholder-yogurt.jpg',
//       '/placeholder-dessert.jpg',
//       '/placeholder-bowl.jpg',
//       '/placeholder-fruit.jpg',
//       '/placeholder-smoothie.jpg',
//       '/placeholder-dish.jpg',
//     ],
//     attribute: undefined,
//   },
//   {
//     id: 'show-who',
//     title: 'Show who you are',
//     description:
//       'Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business.',
//     businessName: 'Fashionista',
//     rating: 5,
//     images: ['/placeholder-fashion.jpg'],
//     attribute: 'Identifies as women-owned',
//   },
// ];

//  function BusinessSetupSection() {
//   const [activeTab, setActiveTab] = useState('photos-logos');

//   const activeContent = tabsData.find((tab) => tab.id === activeTab) || tabsData[1];

//   return (
//     <div className="min-h-screen bg-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
//           {/* Left Side - Navigation */}
//           <div className="space-y-4 sm:space-y-6">
//             {tabsData.map((tab) => (
//               <div
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className="cursor-pointer group"
//               >
//                 <div
//                   className={`relative pl-6 sm:pl-8 py-4 sm:py-6 transition-all duration-200 ${
//                     activeTab === tab.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
//                   }`}
//                 >
//                   {/* Active Indicator */}
//                   <div
//                     className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transition-all duration-200 ${
//                       activeTab === tab.id ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   />

//                   {/* Content */}
//                   <div className="space-y-3 sm:space-y-4">
//                     <h2
//                       className={`text-2xl sm:text-3xl lg:text-4xl font-normal transition-colors duration-200 ${
//                         activeTab === tab.id ? 'text-gray-900' : 'text-gray-600'
//                       }`}
//                     >
//                       {tab.title}
//                     </h2>

//                     {activeTab === tab.id && tab.description && (
//                       <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl animate-fadeIn">
//                         {tab.description}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side - Preview Card */}
//           <div className="lg:sticky lg:top-8 self-start">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-md mx-auto lg:max-w-none">
//               {/* Business Header */}
//               <div className="p-4 sm:p-6 border-b border-gray-200">
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">
//                       {activeContent.businessName}
//                     </h3>
//                     <div className="flex items-center gap-1 mt-2">
//                       {[...Array(activeContent.rating)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md">
//                       76+
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Tabs */}
//               {activeContent.id !== 'show-who' && (
//                 <div className="border-b border-gray-200">
//                   <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6">
//                     <button className="py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-500 hover:text-gray-900">
//                       Overview
//                     </button>
//                     <button className="py-3 sm:py-4 text-sm sm:text-base font-medium text-blue-600 border-b-2 border-blue-600">
//                       Photos
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Photo Grid or Overview */}
//               {activeContent.id !== 'show-who' ? (
//                 <>
//                   {/* Filter Tabs */}
//                   <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
//                     <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
//                       <FilterButton label="All" icon="🍦" active />
//                       <FilterButton label="All" icon="👤" />
//                       <FilterButton label="Latest" icon="👤" />
//                       <FilterButton label="Menu" icon="🍽️" />
//                       <FilterButton label="" icon="👤" />
//                     </div>
//                   </div>

//                   {/* Photos Grid */}
//                   <div className="p-4 sm:p-6">
//                     <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                       {activeContent.images.map((img, index) => (
//                         <div
//                           key={index}
//                           className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${
//                             index % 4 === 0
//                               ? 'from-orange-200 to-orange-300'
//                               : index % 4 === 1
//                               ? 'from-amber-200 to-amber-300'
//                               : index % 4 === 2
//                               ? 'from-blue-200 to-blue-300'
//                               : 'from-pink-200 to-pink-300'
//                           } ${index === 1 ? 'row-span-2' : 'aspect-square'}`}
//                         >
//                           <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl">
//                             {index % 4 === 0 ? '🥗' : index % 4 === 1 ? '🍰' : index % 4 === 2 ? '🍦' : '🥘'}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {/* Overview Mode for "Show who you are" */}
//                   <div className="p-4 sm:p-6">
//                     {/* Cover Image */}
//                     <div className="relative h-32 sm:h-40 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-4 sm:mb-6">
//                       <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-4 text-2xl sm:text-4xl">
//                         👗 👔 👚 👕
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex items-center border-b border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
//                       <button className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-blue-600 border-b-2 border-blue-600">
//                         Overview
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
//                       <ActionButton icon="📞" label="Call" />
//                       <ActionButton icon="🧭" label="Directions" />
//                       <ActionButton icon="📤" label="Share" />
//                       <ActionButton icon="🌐" label="Website" />
//                     </div>

//                     {/* Checkmarks */}
//                     <div className="flex items-center gap-8 sm:gap-12 mb-6 sm:mb-8 text-gray-400">
//                       <span className="text-xl sm:text-2xl">✓</span>
//                       <span className="text-xl sm:text-2xl">✓</span>
//                     </div>

//                     {/* Attribute Badge */}
//                     <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-sm">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                           <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-purple-600 text-purple-600" />
//                         </div>
//                       </div>
//                       <p className="text-sm sm:text-base text-gray-700">{activeContent.attribute}</p>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function FilterButton({ label, icon, active = false }: { label: string; icon: string; active?: boolean }) {
//   return (
//     <button
//       className={`flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
//         active
//           ? 'bg-blue-100 text-blue-700'
//           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//       }`}
//     >
//       <span className="text-base sm:text-lg">{icon}</span>
//       {label && <span>{label}</span>}
//     </button>
//   );
// }

// function ActionButton({ icon, label }: { icon: string; label: string }) {
//   return (
//     <button className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl hover:bg-gray-50 transition-colors">
//       <div className="text-xl sm:text-2xl">{icon}</div>
//       <span className="text-[10px] sm:text-xs text-gray-600">{label}</span>
//     </button>
//   );
// }