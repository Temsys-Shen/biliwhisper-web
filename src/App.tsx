import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
            <div className='container flex flex-col justify-center items-center p-4'>
                <h1 className='text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
                    语音识别助手
                </h1>
                <h2 className='mt-3 mb-8 px-4 text-center text-lg md:text-xl text-slate-700'>
                    直接在浏览器中进行本地语音识别
                </h2>
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
                    <AudioManager transcriber={transcriber} />
                    <Transcript transcribedData={transcriber.output} />
                </div>
            </div>
        </div>
    );
}

export default App;