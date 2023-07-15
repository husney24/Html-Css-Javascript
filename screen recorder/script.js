let mediaRecorder;
let recordedChunks = [];

const videoElement = document.getElementById('videoElement');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener('dataavailable', (event) => {
            recordedChunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
            const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
            videoElement.src = URL.createObjectURL(recordedBlob);
        });

        startButton.disabled = true;
        stopButton.disabled = false;
        mediaRecorder.start();
    } catch (error) {
        console.error('Error accessing screen media:', error);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        startButton.disabled = false;
        stopButton.disabled = true;
        recordedChunks = [];
    }
}
