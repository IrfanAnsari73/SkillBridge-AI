import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const MockInterview = () => {
    const [jobRole, setJobRole] = useState("");
    const [interviewType, setInterviewType] =
        useState("Technical");

    const [started, setStarted] = useState(false);

    const [question, setQuestion] =
        useState(null);

    const [answer, setAnswer] = useState("");

    const [evaluation, setEvaluation] =
        useState(null);

    const [questionNumber, setQuestionNumber] =
        useState(1);

    const totalQuestions = 5;

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");


    // =========================
    // START INTERVIEW
    // =========================

    const startInterview = async () => {

        if (!jobRole) {

            setError(
                "Please select a job role."
            );

            return;
        }

        try {

            setLoading(true);
            setError("");

            const token =
                localStorage.getItem("token");


            const response =
                await fetch(
                    "http://localhost:5000/api/interview/start",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            Authorization:
                                `Bearer ${token}`,
                        },

                        body: JSON.stringify({
                            jobRole,
                            interviewType,
                        }),
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to start interview."
                );
            }


            setQuestion(
                data.question
            );

            setStarted(true);

            setEvaluation(null);

            setAnswer("");

            setQuestionNumber(1);

        } catch (error) {

            console.error(
                "Start Interview Error:",
                error
            );

            setError(
                error.message
            );

        } finally {

            setLoading(false);

        }
    };


    // =========================
    // SUBMIT ANSWER
    // =========================

    const submitAnswer = async () => {

        if (!answer.trim()) {

            setError(
                "Please write your answer first."
            );

            return;
        }


        try {

            setLoading(true);
            setError("");

            const token =
                localStorage.getItem("token");


            const response =
                await fetch(
                    "http://localhost:5000/api/interview/evaluate",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            Authorization:
                                `Bearer ${token}`,
                        },

                        body: JSON.stringify({

                            jobRole,

                            question:
                                question.question,

                            answer:
                                answer.trim(),

                            questionNumber,

                            totalQuestions,

                        }),
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to evaluate answer."
                );
            }


            setEvaluation(
                data.evaluation
            );

            setAnswer("");

        } catch (error) {

            console.error(
                "Evaluate Answer Error:",
                error
            );

            setError(
                error.message
            );

        } finally {

            setLoading(false);

        }
    };


    // =========================
    // NEXT QUESTION
    // =========================

    const nextQuestion = () => {

        if (
            questionNumber >=
            totalQuestions
        ) {
            return;
        }


        if (
            evaluation?.nextQuestion
        ) {

            setQuestion({

                question:
                    evaluation.nextQuestion,

                category:
                    evaluation.nextQuestionCategory ||
                    "Technical",

                difficulty:
                    "Intermediate",

            });

            setQuestionNumber(
                questionNumber + 1
            );

            setEvaluation(null);

            setAnswer("");

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        }

    };


    // =========================
    // RESTART
    // =========================

    const restartInterview = () => {

        setStarted(false);

        setQuestion(null);

        setEvaluation(null);

        setAnswer("");

        setQuestionNumber(1);

        setError("");
    };


    return (
        <DashboardLayout>

            <div className="mx-auto max-w-5xl space-y-6">


                {/* =========================
                    HEADER
                ========================= */}

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        🎤 AI Mock Interview
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Practice interviews with an AI interviewer
                        based on your career profile.
                    </p>

                </div>


                {/* =========================
                    ERROR
                ========================= */}

                {error && (

                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">

                        {error}

                    </div>

                )}


                {/* =========================
                    SETUP SCREEN
                ========================= */}

                {!started && (

                    <div className="rounded-xl bg-white p-6 shadow">

                        <h2 className="text-xl font-bold text-gray-800">
                            Start Your Mock Interview
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Choose your target role and interview type.
                        </p>


                        {/* JOB ROLE */}

                        <div className="mt-6">

                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Target Job Role
                            </label>

                            <select
                                value={jobRole}
                                onChange={(e) =>
                                    setJobRole(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                            >

                                <option value="">
                                    Select Job Role
                                </option>

                                <option value="Full Stack Developer (MERN)">
                                    Full Stack Developer (MERN)
                                </option>

                                <option value="Frontend Developer">
                                    Frontend Developer
                                </option>

                                <option value="Backend Developer">
                                    Backend Developer
                                </option>

                                <option value="Java Developer">
                                    Java Developer
                                </option>

                                <option value="Software Developer">
                                    Software Developer
                                </option>

                            </select>

                        </div>


                        {/* INTERVIEW TYPE */}

                        <div className="mt-5">

                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Interview Type
                            </label>

                            <select
                                value={interviewType}
                                onChange={(e) =>
                                    setInterviewType(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                            >

                                <option value="Technical">
                                    Technical
                                </option>

                                <option value="HR">
                                    HR / Behavioral
                                </option>

                                <option value="Project Based">
                                    Project Based
                                </option>

                            </select>

                        </div>


                        {/* START BUTTON */}

                        <button
                            onClick={
                                startInterview
                            }
                            disabled={loading}
                            className="mt-6 w-full rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            {loading
                                ? "🤖 AI is preparing your interview..."
                                : "🚀 Start Mock Interview"}

                        </button>

                    </div>
                )}


                {/* =========================
                    INTERVIEW SCREEN
                ========================= */}

                {started &&
                    question && (

                        <>

                            {/* PROGRESS */}

                            <div className="rounded-xl bg-white p-5 shadow">

                                <div className="flex items-center justify-between">

                                    <span className="font-semibold text-gray-700">
                                        Question{" "}
                                        {questionNumber} of{" "}
                                        {totalQuestions}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        {question.category}
                                    </span>

                                </div>


                                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">

                                    <div
                                        className="h-full rounded-full bg-green-600 transition-all"
                                        style={{
                                            width:
                                                `${(questionNumber /
                                                    totalQuestions) *
                                                100
                                                }%`,
                                        }}
                                    />

                                </div>

                            </div>


                            {/* QUESTION */}

                            <div className="rounded-xl bg-white p-6 shadow">

                                <div className="flex flex-wrap items-center justify-between gap-3">

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                        {question.category}
                                    </span>

                                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                                        {question.difficulty}
                                    </span>

                                </div>


                                <h2 className="mt-5 text-2xl font-bold leading-relaxed text-gray-800">
                                    {question.question}
                                </h2>


                                {/* ANSWER */}

                                {!evaluation && (

                                    <>

                                        <label className="mt-6 mb-2 block text-sm font-semibold text-gray-700">
                                            Your Answer
                                        </label>

                                        <textarea
                                            value={answer}
                                            onChange={(e) =>
                                                setAnswer(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Type your answer here..."
                                            rows={7}
                                            className="w-full resize-none rounded-lg border border-gray-300 p-4 outline-none focus:border-green-500"
                                        />


                                        <button
                                            onClick={
                                                submitAnswer
                                            }
                                            disabled={
                                                loading
                                            }
                                            className="mt-4 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                                        >

                                            {loading
                                                ? "🤖 AI is evaluating..."
                                                : "Submit Answer"}

                                        </button>

                                    </>

                                )}

                            </div>


                            {/* =========================
                            EVALUATION
                        ========================= */}

                            {evaluation && (

                                <div className="space-y-6">


                                    {/* SCORE */}

                                    <div className="rounded-xl bg-white p-6 shadow">

                                        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                                            AI Evaluation
                                        </p>


                                        <div className="mt-5 flex flex-wrap items-center gap-6">

                                            <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-green-500">

                                                <span className="text-3xl font-bold text-gray-800">
                                                    {evaluation.score}%
                                                </span>

                                            </div>


                                            <div>

                                                <h3 className="text-xl font-bold text-gray-800">
                                                    Your Answer Score
                                                </h3>

                                                <p className="mt-2 max-w-2xl text-gray-600">
                                                    {evaluation.evaluation}
                                                </p>

                                            </div>

                                        </div>

                                    </div>


                                    {/* STRENGTHS */}

                                    <div className="rounded-xl bg-white p-6 shadow">

                                        <h2 className="text-xl font-bold text-gray-800">
                                            💪 What You Did Well
                                        </h2>


                                        <div className="mt-4 space-y-3">

                                            {evaluation.strengths?.map(
                                                (
                                                    strength,
                                                    index
                                                ) => (

                                                    <div
                                                        key={
                                                            index
                                                        }
                                                        className="rounded-lg bg-green-50 p-4 text-green-800"
                                                    >
                                                        ✓{" "}
                                                        {strength}
                                                    </div>

                                                )
                                            )}

                                        </div>

                                    </div>


                                    {/* IMPROVEMENTS */}

                                    <div className="rounded-xl bg-white p-6 shadow">

                                        <h2 className="text-xl font-bold text-gray-800">
                                            🧩 What You Can Improve
                                        </h2>


                                        <div className="mt-4 space-y-3">

                                            {evaluation.improvements?.map(
                                                (
                                                    improvement,
                                                    index
                                                ) => (

                                                    <div
                                                        key={
                                                            index
                                                        }
                                                        className="rounded-lg bg-yellow-50 p-4 text-yellow-800"
                                                    >
                                                        {index +
                                                            1}.{" "}
                                                        {
                                                            improvement
                                                        }
                                                    </div>

                                                )
                                            )}

                                        </div>

                                    </div>


                                    {/* BETTER ANSWER TIP */}

                                    <div className="rounded-xl bg-blue-50 p-6">

                                        <h2 className="text-xl font-bold text-blue-800">
                                            💡 Better Answer Tip
                                        </h2>

                                        <p className="mt-3 leading-7 text-blue-700">
                                            {
                                                evaluation.betterAnswerTip
                                            }
                                        </p>

                                    </div>


                                    {/* NEXT / FINISH */}

                                    {questionNumber <
                                        totalQuestions &&
                                        evaluation.nextQuestion ? (

                                        <button
                                            onClick={
                                                nextQuestion
                                            }
                                            className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                                        >
                                            Next Question →
                                        </button>

                                    ) : (

                                        <div className="rounded-xl bg-green-50 p-6 text-center">

                                            <h2 className="text-2xl font-bold text-green-800">
                                                🎉 Interview Completed!
                                            </h2>

                                            <p className="mt-2 text-green-700">
                                                Great job! Review your
                                                feedback and continue
                                                practicing.
                                            </p>

                                            <button
                                                onClick={
                                                    restartInterview
                                                }
                                                className="mt-5 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                                            >
                                                🔄 Start New Interview
                                            </button>

                                        </div>

                                    )}

                                </div>

                            )}

                        </>

                    )}

            </div>

        </DashboardLayout>
    );
};

export default MockInterview;