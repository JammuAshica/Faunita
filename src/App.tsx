import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Heart, Shield, Globe, Camera, Users, Leaf,ChevronRight,Star,Mail,Phone,MapPin,Upload,AlertTriangle,Info, CheckCircle,XCircle,ChevronDown
} from 'lucide-react';

interface AnimalInfo {
  name: string;
  scientificName: string;
  category: string;
  habitat: string;
  diet: string;
  conservationStatus: string;
  description: string;
  funFacts: string[];
  isEndangered: boolean;
}

function App() {
  const [showMainSite, setShowMainSite] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [animalInfo, setAnimalInfo] = useState<AnimalInfo | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDeepDive = () => {
    setShowMainSite(true);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnimals: AnimalInfo[] = [
        {
          name: "African Elephant",
          scientificName: "Loxodonta africana",
          category: "Mammal",
          habitat: "Savannas, forests, and grasslands of Africa",
          diet: "Herbivore - grasses, fruits, bark",
          conservationStatus: "Endangered",
          description: "The African elephant is the largest living terrestrial animal. They are known for their intelligence, strong family bonds, and complex social structures.",
          funFacts: [
            "Can weigh up to 6 tons",
            "Have excellent memory",
            "Use their trunks for communication",
            "Live in matriarchal societies"
          ],
          isEndangered: true
        },
        {
          name: "Bengal Tiger",
          scientificName: "Panthera tigris tigris",
          category: "Mammal",
          habitat: "Tropical forests, grasslands, and mangroves",
          diet: "Carnivore - deer, wild boar, water buffalo",
          conservationStatus: "Endangered",
          description: "The Bengal tiger is a magnificent predator and the most numerous tiger subspecies. They are solitary hunters with distinctive orange coats and black stripes.",
          funFacts: [
            "Can leap up to 30 feet",
            "Excellent swimmers",
            "Each tiger has unique stripe patterns",
            "Can consume up to 25 pounds of meat in one sitting"
          ],
          isEndangered: true
        },
        {
          name: "Red Panda",
          scientificName: "Ailurus fulgens",
          category: "Mammal",
          habitat: "Temperate forests of the Himalayas",
          diet: "Primarily bamboo, also fruits and insects",
          conservationStatus: "Endangered",
          description: "The red panda is a small mammal native to the eastern Himalayas and southern China. Despite their name, they are not closely related to giant pandas.",
          funFacts: [
            "Also called 'firefox'",
            "Spend most of their time in trees",
            "Have a false thumb for gripping bamboo",
            "Are most active during dawn and dusk"
          ],
          isEndangered: true
        }
      ];
      
      const randomAnimal = mockAnimals[Math.floor(Math.random() * mockAnimals.length)];
      setAnimalInfo(randomAnimal);
      setIsAnalyzing(false);
    }, 3000);
  };

  const endangeredAnimals = [
    {
      name: "Amur Leopard",
      population: "~130",
      status: "Critically Endangered",
      image: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Vaquita Porpoise",
      population: "~10",
      status: "Critically Endangered",
      image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Javan Rhinoceros",
      population: "~75",
      status: "Critically Endangered",
      image: "https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Mountain Gorilla",
      population: "~1,000",
      status: "Critically Endangered",
      image: "https://images.pexels.com/photos/1731022/pexels-photo-1731022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Snow Leopard",
      population: "~4,000",
      status: "Vulnerable",
      image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Hawksbill Turtle",
      population: "~25,000",
      status: "Critically Endangered",
      image: "https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critically Endangered':
        return 'text-red-600 bg-red-100';
      case 'Endangered':
        return 'text-orange-600 bg-orange-100';
      case 'Vulnerable':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Animated Homepage Component
  if (!showMainSite) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-teal-300 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-40 w-4 h-4 bg-emerald-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-80 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/15 to-green-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          {/* Animated Logo */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="animate-bounce mr-4">
                <Leaf className="h-16 w-16 text-emerald-300" />
              </div>
              <div className="relative">
                <h1 className="text-8xl md:text-9xl font-bold text-white tracking-wider">
                  {'FAUNITA'.split('').map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-pulse hover:animate-bounce transition-all duration-300 hover:text-emerald-300 cursor-default"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
                {/* Glowing effect */}
                <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-emerald-300 opacity-20 blur-sm">
                  FAUNITA
                </div>
              </div>
            </div>
            
            {/* Subtitle with typewriter effect */}
            <div className="text-2xl md:text-3xl text-emerald-100 mb-4 font-light tracking-wide">
              <span className="animate-pulse">Discover • Protect • Celebrate</span>
            </div>
            <p className="text-lg md:text-xl text-emerald-200 opacity-80 max-w-2xl mx-auto leading-relaxed">
              Journey into the wild world of animals with AI-powered identification and conservation awareness
            </p>
          </div>

          {/* Animated Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Camera className="h-12 w-12 text-emerald-300 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Identification</h3>
                <p className="text-emerald-100 text-sm">Upload photos to identify any animal species instantly</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Shield className="h-12 w-12 text-emerald-300 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Conservation</h3>
                <p className="text-emerald-100 text-sm">Learn about endangered species and how to protect them</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Globe className="h-12 w-12 text-emerald-300 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-emerald-100 text-sm">Join a worldwide community of wildlife enthusiasts</p>
              </div>
            </div>
          </div>

          {/* Deep Dive Button */}
          <div className="text-center">
            <button
              onClick={handleDeepDive}
              className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              <span className="flex items-center space-x-3">
                <span>Deep Dive</span>
                <ChevronDown className="h-6 w-6 group-hover:animate-bounce" />
              </span>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
            </button>
            
            {/* Animated hint */}
            <div className="mt-8 animate-bounce">
              <p className="text-emerald-200 text-sm">Click to explore the wild world of animals</p>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    );
  }

  // Main Website (existing content)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">Faunita</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Home</a>
              <a href="#identify" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Identify</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">About</a>
              <a href="#wildlife" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Wildlife</a>
              <a href="#endangered" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Endangered</a>
              <a href="#gallery" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">Home</a>
                <a href="#identify" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">Identify</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">About</a>
                <a href="#wildlife" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">Wildlife</a>
                <a href="#endangered" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">Endangered</a>
                <a href="#gallery" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">Gallery</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-gray-900/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Wild World of 
            <span className="text-emerald-400"> Animals</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Explore the fascinating lives of wildlife, identify animals with AI, and learn about conservation efforts to protect endangered species.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Camera className="h-6 w-6" />
              <span>Identify Animal</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Animal Identification Section */}
      <section id="identify" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Animal Identification</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upload a photo of any animal and our AI will identify the species, provide detailed information, and tell you about its conservation status.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Animal Photo</h3>
                <p className="text-gray-600">Take a photo or upload an image to identify the animal</p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors duration-200">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Photo</span>
                </button>
                <p className="text-gray-500 mt-4">Or drag and drop an image here</p>
              </div>

              {uploadedImage && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Image</h4>
                      <img
                        src={uploadedImage}
                        alt="Uploaded animal"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Analysis Result</h4>
                      {isAnalyzing ? (
                        <div className="flex items-center justify-center h-64">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Analyzing image...</p>
                          </div>
                        </div>
                      ) : animalInfo ? (
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold text-gray-900">{animalInfo.name}</h5>
                            {animalInfo.isEndangered && (
                              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Endangered</span>
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 italic mb-4">{animalInfo.scientificName}</p>
                          <div className="space-y-3">
                            <div>
                              <span className="font-semibold text-gray-700">Category:</span>
                              <span className="ml-2 text-gray-600">{animalInfo.category}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Habitat:</span>
                              <span className="ml-2 text-gray-600">{animalInfo.habitat}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Diet:</span>
                              <span className="ml-2 text-gray-600">{animalInfo.diet}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Conservation Status:</span>
                              <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${getStatusColor(animalInfo.conservationStatus)}`}>
                                {animalInfo.conservationStatus}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-4 leading-relaxed">{animalInfo.description}</p>
                          
                          <div className="mt-6">
                            <h6 className="font-semibold text-gray-700 mb-2">Fun Facts:</h6>
                            <ul className="space-y-1">
                              {animalInfo.funFacts.map((fact, index) => (
                                <li key={index} className="text-gray-600 flex items-start space-x-2">
                                  <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span>{fact}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Faunita</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Faunita is dedicated to celebrating the incredible diversity of animal life on our planet. 
              We believe in the power of education and awareness to inspire conservation efforts worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conservation</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting wildlife conservation efforts and protecting endangered species for future generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing comprehensive information about animal behavior, habitats, and the importance of biodiversity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a global community of animal lovers, researchers, and conservationists working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Categories */}
      <section id="wildlife" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Wildlife Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore different categories of animals and learn about their unique characteristics and habitats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mammals */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Mammals</h3>
                <p className="text-gray-200 mb-4">From tiny shrews to massive elephants, discover the world of mammals.</p>
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Birds */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Birds</h3>
                <p className="text-gray-200 mb-4">Explore the fascinating world of avian species and their behaviors.</p>
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Marine Life */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Marine Life</h3>
                <p className="text-gray-200 mb-4">Dive into the depths and discover incredible ocean creatures.</p>
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Reptiles */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Reptiles</h3>
                <p className="text-gray-200 mb-4">Learn about cold-blooded creatures and their adaptations.</p>
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Insects */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/3043242/pexels-photo-3043242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Insects</h3>
                <p className="text-gray-200 mb-4">Discover the tiny but mighty world of insects and arthropods.</p>
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Amphibians */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/70069/frog-macro-amphibian-green-70069.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Amphibians</h3>
                <p className="text-gray-200 mb-4">Explore creatures that live both in water and on land.</p>
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endangered Species Section */}
      <section id="endangered" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-12 w-12 text-red-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Endangered Species</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These magnificent creatures are facing extinction. Learn about the most endangered animals on Earth and how we can help protect them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {endangeredAnimals.map((animal, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${animal.image}')` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(animal.status)}`}>
                      {animal.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">Population: {animal.population}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-1">
                      <Info className="h-4 w-4" />
                      <span>Learn More</span>
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                      Help Protect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">How You Can Help</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every action counts in the fight to protect endangered species. Here are ways you can make a difference.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Donate</h4>
                  <p className="text-gray-600">Support conservation organizations working to protect endangered species.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Spread Awareness</h4>
                  <p className="text-gray-600">Share information about endangered species with friends and family.</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Sustainably</h4>
                  <p className="text-gray-600">Make eco-friendly choices that help protect natural habitats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Together, we're making a difference in wildlife conservation and education.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2.5M+</div>
              <div className="text-emerald-100 text-lg">Animals Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-emerald-100 text-lg">Species Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-emerald-100 text-lg">Conservation Supporters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-emerald-100 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Wildlife Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stunning photographs capturing the beauty and diversity of animal life around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
              'https://images.pexels.com/photos/1731022/pexels-photo-1731022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
              'https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
              'https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
              'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
              'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Wildlife Photo {index + 1}</h3>
                      <p className="text-sm text-gray-200">Captured in the wild</p>
                    </div>
                    <Camera className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our mission to protect and celebrate wildlife. Contact us to learn more about conservation efforts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@faunita.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Wildlife Conservation Center<br />Nature City, NC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Tell us about your interest in wildlife conservation..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">Faunita</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Dedicated to celebrating and protecting the incredible diversity of animal life on our planet.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Home</a></li>
                <li><a href="#identify" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Identify</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">About</a></li>
                <li><a href="#wildlife" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Wildlife</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Conservation</h3>
              <ul className="space-y-2">
                <li><a href="#endangered" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Endangered Species</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Habitat Protection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Research Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Get Involved</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">Join our community of wildlife enthusiasts and conservationists.</p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Faunita. All rights reserved. Made with ❤️ for wildlife conservation.
            </p>
          </div>
        </div>
      </footer>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Animal Identification</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-gray-600">Upload a photo to identify the animal and learn about its conservation status</p>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors duration-200">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                  id="modal-file-input"
                />
                <label
                  htmlFor="modal-file-input"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto cursor-pointer w-fit"
                >
                  <Upload className="h-5 w-5" />
                  <span>Choose Photo</span>
                </label>
                <p className="text-gray-500 mt-4">Or drag and drop an image here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;