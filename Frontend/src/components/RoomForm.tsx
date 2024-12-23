
export const RoomForm = () => {
    return (
        <div className="bg-white/10 backdrop-blur-lg max-w-md mx-auto mb-16 rounded-lg border border-white text-card-foreground shadow-sm">
            <div className="p-6">
                <h2 className="text-2xl font-mono font-semibold mb-4 text-center text-indigo-300">
                    Enter the Strip Chat
                </h2>
                <div className="space-y-4">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded font-mono">
                        Create New Room
                    </button>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Enter Room ID"
                            className="bg-white/10 text-white placeholder-indigo-900 placeholder:font-mono flex-grow py-2 px-4 rounded border border-white"
                        />
                        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded font-mono">
                            Join Room
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
