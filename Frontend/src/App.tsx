import { Lock, MessageCircle, Shield, User } from 'react-feather'
import './App.css'
import Header from './components/Header'
import { RoomForm } from './components/RoomForm'
import { FeatureCard } from './components/FeatureCard'

const features = [
  {
    Icon: Shield,
    title: 'Anonymous',
    description: 'No sign-up. No trace. Your identity remains a mystery.',
    iconColor: 'text-indigo-300',
    titleColor: 'text-indigo-300',
  },
  {
    Icon: Lock,
    title: 'Encrypted',
    description: 'End-to-end encryption keeps your messages secure.',
    iconColor: 'text-pink-300',
    titleColor: 'text-pink-300'
  },
  {
    Icon: MessageCircle,
    title: 'Ephemeral',
    description: 'Messages vanish forever. Leave no digital footprint.',
    iconColor: 'text-indigo-300',
    titleColor: 'text-indigo-300'
  },
  {
    Icon: User,
    title: 'Private Rooms',
    description: 'Create or join rooms. You control who enters.',
    iconColor: 'text-pink-300',
    titleColor: 'text-pink-300'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <Header />
        <RoomForm />
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          {features.map((features, Index) => (
            <FeatureCard key={Index} {...features} />
          ))}
        </div>
      </main>
      <footer className='text-center py-4 text-indigo-200'>
        <p> &copy; 2023 Strip Chat. Embrace the freedom of truly private conversations.</p>
      </footer>
    </div>
  )
}

export default App
