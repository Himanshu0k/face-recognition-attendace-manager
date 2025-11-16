import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Eye, ClipboardEdit, Zap, Clock, Camera } from "lucide-react";

const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [step, setStep] = useState(1); // 1 = front, 2 = right/left, 3 = up/down
  const [capturedImages, setCapturedImages] = useState([]);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get("http://localhost:8081/api/student/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setStudent(res.data);
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };

    fetchStudent();
  }, []);

  // Start Camera
  const startCamera = async () => {
    setShowCamera(true);
    setStep(1);
    setCapturedImages([]);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera Access Denied:", err);
      alert("Camera permission required!");
    }
  };

  // Capture image for each step
  const captureImage = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg");

    // Add image to array
    const updatedImages = [...capturedImages, imageData];
    setCapturedImages(updatedImages);

    // If last step → send images to backend
    if (step === 3) {
      submitAllImages(updatedImages);
      return;
    }

    // Move to next step
    setStep(step + 1);
  };

  // Send all 3 photos to backend
  const submitAllImages = async (images) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8081/api/student/markAttendance",
        { images: images },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(res.data.message || "Attendance marked successfully!");
      stopCamera();
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Face recognition failed!");
    }
  };

  // Stop Camera
  const stopCamera = () => {
    setShowCamera(false);
    setStep(1);

    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  // Step Instructions
  const getInstruction = () => {
    if (step === 1) return "Look Straight at the Camera";
    if (step === 2) return "Turn your Face Slightly Right or Left";
    if (step === 3) return "Move Your Face Slightly Up or Down";
  };

  return (
    <div className="p-8 space-y-8">
      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-extrabold">
          Welcome Back, {student ? student.username : "..."}!
        </h2>
        <p className="text-white/80 mt-2 text-lg">
          Your attendance matters. Stay on track!
        </p>
      </div>

      {/* ATTENDANCE METRICS */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Attendance Key Metrics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100">
            <p className="text-sm text-gray-600">Overall Attendance</p>
            <h2 className="text-3xl font-bold text-indigo-900 mt-2">85.0%</h2>
          </div>

          <div className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-100">
            <p className="text-sm text-red-600">Absent Days</p>
            <h2 className="text-3xl font-bold text-red-700 mt-2">4 Days</h2>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
            <p className="text-sm text-green-600">Absences Allowed</p>
            <h2 className="text-3xl font-bold text-green-700 mt-2">13 Classes</h2>
          </div>
        </div>
      </div>

      {/* TODAY'S ATTENDANCE */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Today's Attendance
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-3">
              <Clock className="text-indigo-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Current Class
              </h4>
            </div>

            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
              Differential Equations (MTH 301)
            </h2>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Time:</span> 10:00 AM – 11:30 AM
            </p>

            <button
              onClick={startCamera}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all flex justify-center items-center gap-2"
            >
              <Camera size={20} />
              Mark Attendance (Face ID)
            </button>
          </div>
        </div>
      </div>

      {/* CAMERA POPUP */}
      {showCamera && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] md:w-[450px] text-center">
            <h2 className="text-xl font-bold mb-3">Face Recognition Step {step}/3</h2>
            <p className="text-gray-600 mb-4">{getInstruction()}</p>

            <video ref={videoRef} autoPlay className="w-full rounded-lg shadow-md" />

            <canvas ref={canvasRef} className="hidden"></canvas>

            <div className="mt-5 flex justify-between">
              <button
                onClick={stopCamera}
                className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>

              <button
                onClick={captureImage}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                {step === 3 ? "Submit" : "Capture"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
