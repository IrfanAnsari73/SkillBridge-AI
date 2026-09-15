import { useState } from "react";

const MockInterview = () => {
    const [jobRole, setJobRole] = useState("");
    const [interviewType, setInterviewType] =
        useState("Technical");

    const [started, setStarted] = useState(false);
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState("");
    const [evaluation, setEvaluation] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);

    const totalQuestions = 5;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // =========================
    // START INTERVIEW
    // =========================

    const startInterview = async () => {
        if (!jobRole) {
            setError("Please select a job role.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/interview/start",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        jobRole,
                        interviewType,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to start interview."
                );
            }

            setQuestion(data.question);
            setStarted(true);
            setEvaluation(null);
            setAnswer("");
            setQuestionNumber(1);

        } catch (error) {
            console.error(
                "Start Interview Error:",
                error
            );

            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // SUBMIT ANSWER
    // =========================

    const submitAnswer = async () => {
        if (!answer.trim()) {
            setError("Please write your answer first.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                "https://skillbridge-ai-backend-v6uk.onrender.com/api/interview/evaluate",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        jobRole,
                        question: question.question,
                        answer: answer.trim(),
                        questionNumber,
                        totalQuestions,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to evaluate answer."
                );
            }

            setEvaluation(data.evaluation);
            setAnswer("");

        } catch (error) {
            console.error(
                "Evaluate Answer Error:",
                error
            );

            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // NEXT QUESTION
    // =========================

    const nextQuestion = () => {
        if (questionNumber >= totalQuestions) {
            return;
        }

        if (evaluation?.nextQuestion) {
            setQuestion({
                question: evaluation.nextQuestion,
                category:
                    evaluation.nextQuestionCategory ||
                    "Technical",
                difficulty: "Intermediate",
            });

            setQuestionNumber(
                questionNumber + 1
            );

            setEvaluation(null);
            setAnswer("");
            setError("");

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
        <div className="w-full max-w-7xl mx-auto min-w-0 pb-12">

            <div className="max-w-6xl mx-auto space-y-7">

                {/* =========================
                    HERO HEADER
                ========================= */}

                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl">

                    <div className="absolute -right-24 -top-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

                    <div className="absolute -left-24 -bottom-32 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />

                    <div className="relative p-6 md:p-9">

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

                            <div className="flex-1">

                                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
                                    🎤 AI Interview Simulator
                                </div>

                                <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                                    AI Mock Interview
                                    <span className="text-green-500">
                                        .
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                                    Practice realistic interviews with
                                    an AI interviewer and receive
                                    instant feedback on your answers.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🧠 AI Evaluation
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🎯 Role Based
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        📊 Instant Score
                                    </span>

                                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                                        🚀 5 Questions
                                    </span>

                                </div>

                            </div>

                            {/* Interview icon */}

                            <div className="hidden sm:flex w-32 h-32 shrink-0 rounded-3xl border border-green-400/20 bg-green-500/10 items-center justify-center text-6xl">
                                🎤
                            </div>

                        </div>

                    </div>

                </section>

                {/* =========================
                    ERROR
                ========================= */}

                {error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 md:p-5 text-red-700 break-words">

                        <div className="flex items-start gap-3">

                            <span className="text-xl">
                                ⚠️
                            </span>

                            <div>
                                <p className="font-bold">
                                    Something went wrong
                                </p>

                                <p className="mt-1 text-sm">
                                    {error}
                                </p>
                            </div>

                        </div>

                    </div>
                )}

                {/* =========================
                    SETUP SCREEN
                ========================= */}

                {!started && (
                    <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                        <div className="border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40 px-6 md:px-8 py-6">

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                Interview Setup
                            </p>

                            <h2 className="mt-1 text-2xl font-black text-slate-950">
                                Start Your Mock Interview
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Choose your target role and interview
                                type to begin.
                            </p>

                        </div>

                        <div className="p-6 md:p-8">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* JOB ROLE */}

                                <div>

                                    <label className="mb-2 block text-sm font-black text-slate-950">
                                        Target Job Role
                                    </label>

                                    <select
                                        value={jobRole}
                                        onChange={(e) =>
                                            setJobRole(
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
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

                                <div>

                                    <label className="mb-2 block text-sm font-black text-slate-950">
                                        Interview Type
                                    </label>

                                    <select
                                        value={interviewType}
                                        onChange={(e) =>
                                            setInterviewType(
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
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

                            </div>

                            {/* INTERVIEW INFO */}

                            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">

                                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">

                                    <div className="text-2xl">
                                        🎯
                                    </div>

                                    <p className="mt-2 font-bold text-slate-950">
                                        Role Focused
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Questions based on your role
                                    </p>

                                </div>

                                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">

                                    <div className="text-2xl">
                                        🤖
                                    </div>

                                    <p className="mt-2 font-bold text-slate-950">
                                        AI Feedback
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Get instant answer evaluation
                                    </p>

                                </div>

                                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">

                                    <div className="text-2xl">
                                        📊
                                    </div>

                                    <p className="mt-2 font-bold text-slate-950">
                                        5 Questions
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Complete interview practice
                                    </p>

                                </div>

                            </div>

                            {/* START */}

                            <button
                                onClick={startInterview}
                                disabled={loading}
                                className="mt-7 w-full rounded-xl bg-green-600 px-5 py-4 font-black text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading
                                    ? "🤖 AI is preparing your interview..."
                                    : "🚀 Start Mock Interview"}
                            </button>

                        </div>

                    </section>
                )}

                {/* =========================
                    INTERVIEW SCREEN
                ========================= */}

                {started && question && (
                    <>

                        {/* =========================
                            PROGRESS
                        ========================= */}

                        <section className="bg-white rounded-[24px] border border-gray-200 shadow-lg p-5 md:p-6">

                            <div className="flex flex-wrap items-center justify-between gap-3">

                                <div>

                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                        Interview Progress
                                    </p>

                                    <p className="mt-1 font-black text-slate-950">
                                        Question {questionNumber} of{" "}
                                        {totalQuestions}
                                    </p>

                                </div>

                                <span className="rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-bold text-green-700">
                                    {question.category}
                                </span>

                            </div>

                            <div className="mt-5">

                                <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">

                                    <span>
                                        Progress
                                    </span>

                                    <span>
                                        {Math.round(
                                            (questionNumber /
                                                totalQuestions) *
                                            100
                                        )}
                                        %
                                    </span>

                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-gray-100">

                                    <div
                                        className="h-full rounded-full bg-green-600 transition-all duration-500"
                                        style={{
                                            width: `${(questionNumber /
                                                totalQuestions) *
                                                100
                                                }%`,
                                        }}
                                    />

                                </div>

                            </div>

                        </section>

                        {/* =========================
                            QUESTION
                        ========================= */}

                        <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                            <div className="border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40 px-6 md:px-8 py-6">

                                <div className="flex flex-wrap items-center justify-between gap-3">

                                    <span className="rounded-full bg-green-100 border border-green-200 px-4 py-1.5 text-sm font-bold text-green-700">
                                        {question.category}
                                    </span>

                                    <span className="rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-sm font-bold text-gray-600">
                                        {question.difficulty}
                                    </span>

                                </div>

                            </div>

                            <div className="p-6 md:p-8">

                                <div className="flex gap-4">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-950 text-green-400 flex items-center justify-center text-xl">
                                        🤖
                                    </div>

                                    <div className="min-w-0">

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            AI Interviewer
                                        </p>

                                        <h2 className="mt-3 text-xl md:text-2xl font-black leading-relaxed text-slate-950 break-words">
                                            {question.question}
                                        </h2>

                                    </div>

                                </div>

                                {/* ANSWER */}

                                {!evaluation && (
                                    <div className="mt-8">

                                        <label className="mb-2 block text-sm font-black text-slate-950">
                                            Your Answer
                                        </label>

                                        <textarea
                                            value={answer}
                                            onChange={(e) =>
                                                setAnswer(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Type your answer here. Try to explain your approach clearly..."
                                            rows={8}
                                            className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 p-5 text-gray-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                                        />

                                        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                                            <p className="text-xs text-gray-400">
                                                Tip: Structure your answer
                                                clearly and include examples
                                                where possible.
                                            </p>

                                            <button
                                                onClick={
                                                    submitAnswer
                                                }
                                                disabled={
                                                    loading
                                                }
                                                className="w-full sm:w-auto rounded-xl bg-green-600 px-7 py-3.5 font-black text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {loading
                                                    ? "🤖 AI is evaluating..."
                                                    : "Submit Answer →"}
                                            </button>

                                        </div>

                                    </div>
                                )}

                            </div>

                        </section>

                        {/* =========================
                            EVALUATION
                        ========================= */}

                        {evaluation && (
                            <div className="space-y-6">

                                {/* SCORE */}

                                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                                    <div className="border-b border-gray-200 bg-gradient-to-br from-white to-green-50/40 px-6 md:px-8 py-6">

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            AI Evaluation
                                        </p>

                                        <h2 className="mt-1 text-2xl font-black text-slate-950">
                                            📊 Your Performance
                                        </h2>

                                    </div>

                                    <div className="p-6 md:p-8">

                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-7">

                                            <div className="relative w-32 h-32 shrink-0">

                                                <div className="absolute inset-0 rounded-full border-[10px] border-green-100" />

                                                <div
                                                    className="absolute inset-0 rounded-full border-[10px] border-green-600"
                                                    style={{
                                                        clipPath: `polygon(
                                                            0 0,
                                                            100% 0,
                                                            100% ${Math.min(
                                                            Number(
                                                                evaluation.score
                                                            ) || 0,
                                                            100
                                                        )}%,
                                                            0 ${Math.min(
                                                            Number(
                                                                evaluation.score
                                                            ) || 0,
                                                            100
                                                        )}%
                                                        )`,
                                                    }}
                                                />

                                                <div className="absolute inset-0 flex items-center justify-center">

                                                    <span className="text-3xl font-black text-slate-950">
                                                        {
                                                            evaluation.score
                                                        }
                                                        %
                                                    </span>

                                                </div>

                                            </div>

                                            <div className="flex-1 min-w-0">

                                                <div className="inline-flex rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-xs font-bold text-green-700">
                                                    Answer Score
                                                </div>

                                                <h3 className="mt-3 text-xl font-black text-slate-950">
                                                    Your Answer Evaluation
                                                </h3>

                                                <p className="mt-3 leading-7 text-gray-600 break-words">
                                                    {
                                                        evaluation.evaluation
                                                    }
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                                {/* STRENGTHS */}

                                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                                    <div className="px-6 md:px-8 py-6 border-b border-gray-200">

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            Positive Signals
                                        </p>

                                        <h2 className="mt-1 text-2xl font-black text-slate-950">
                                            💪 What You Did Well
                                        </h2>

                                    </div>

                                    <div className="p-5 md:p-8 space-y-3">

                                        {evaluation.strengths?.map(
                                            (
                                                strength,
                                                index
                                            ) => (

                                                <div
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-start gap-3 rounded-2xl bg-green-50 border border-green-100 p-4"
                                                >

                                                    <span className="w-9 h-9 shrink-0 rounded-xl bg-white text-green-600 flex items-center justify-center font-black shadow-sm">
                                                        ✓
                                                    </span>

                                                    <span className="text-green-800 leading-6 break-words pt-1">
                                                        {
                                                            strength
                                                        }
                                                    </span>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </section>

                                {/* IMPROVEMENTS */}

                                <section className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">

                                    <div className="px-6 md:px-8 py-6 border-b border-gray-200">

                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            Growth Areas
                                        </p>

                                        <h2 className="mt-1 text-2xl font-black text-slate-950">
                                            🧩 What You Can Improve
                                        </h2>

                                    </div>

                                    <div className="p-5 md:p-8 space-y-3">

                                        {evaluation.improvements?.map(
                                            (
                                                improvement,
                                                index
                                            ) => (

                                                <div
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-start gap-3 rounded-2xl bg-gray-50 border border-gray-200 p-4"
                                                >

                                                    <span className="w-9 h-9 shrink-0 rounded-xl bg-slate-950 text-green-400 flex items-center justify-center font-black">
                                                        {index +
                                                            1}
                                                    </span>

                                                    <span className="text-gray-700 leading-6 break-words pt-1">
                                                        {
                                                            improvement
                                                        }
                                                    </span>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </section>

                                {/* BETTER ANSWER TIP */}

                                <section className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-xl">

                                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

                                    <div className="relative p-6 md:p-8">

                                        <div className="flex items-start gap-4">

                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl">
                                                💡
                                            </div>

                                            <div>

                                                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                                                    AI Coaching Tip
                                                </p>

                                                <h2 className="mt-1 text-2xl font-black">
                                                    Better Answer Tip
                                                </h2>

                                            </div>

                                        </div>

                                        <p className="mt-6 text-gray-300 leading-7 break-words">
                                            {
                                                evaluation.betterAnswerTip
                                            }
                                        </p>

                                    </div>

                                </section>

                                {/* NEXT / FINISH */}

                                {questionNumber <
                                    totalQuestions &&
                                    evaluation.nextQuestion ? (

                                    <button
                                        onClick={
                                            nextQuestion
                                        }
                                        className="w-full rounded-xl bg-green-600 px-6 py-4 font-black text-white transition hover:bg-green-700 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                                    >
                                        Next Question →
                                    </button>

                                ) : (

                                    <section className="rounded-[28px] bg-green-50 border border-green-200 p-7 md:p-9 text-center">

                                        <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm">
                                            🎉
                                        </div>

                                        <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-green-600">
                                            Interview Complete
                                        </p>

                                        <h2 className="mt-2 text-2xl md:text-3xl font-black text-slate-950">
                                            Great Job!
                                        </h2>

                                        <p className="mt-3 max-w-xl mx-auto text-green-800 leading-6">
                                            You completed all{" "}
                                            {totalQuestions}{" "}
                                            interview questions.
                                            Review your feedback and
                                            keep practicing.
                                        </p>

                                        <button
                                            onClick={
                                                restartInterview
                                            }
                                            className="mt-6 rounded-xl bg-green-600 px-7 py-3.5 font-black text-white transition hover:bg-green-700 shadow-lg shadow-green-600/20"
                                        >
                                            🔄 Start New Interview
                                        </button>

                                    </section>

                                )}

                            </div>
                        )}

                    </>
                )}

            </div>

        </div>
    );
};

export default MockInterview;