"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Фон: тёмный + едва заметный узор (сетка) */}
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Радиальный градиент в центре */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-900/30 to-slate-950 -z-10"></div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-5xl space-y-6">
          {/* Название — "металлический" эффект */}
          <h1 
            className="text-6xl md:text-8xl font-bold tracking-tight animate-metal"
            style={{
              background: 'linear-gradient(145deg, #E5E7EB, #9CA3AF, #374151)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              lineHeight: '1.2',
            }}
          >
            Демьяненко Team
          </h1>

          {/* Девиз — с неоновым свечением */}
          <p 
            className="text-2xl md:text-4xl font-medium animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            Раз уж начал{' '}
            <span
              className="font-bold inline-block hover:scale-105 transition-transform duration-300"
              style={{
                color: '#FF4500',
                textShadow: '0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 15px #FF4500',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 8px #FF6347, 0 0 15px #FF4500, 0 0 25px #FF4500'}
              onMouseLeave={(e) => e.currentTarget.style.textShadow = '0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 15px #FF4500'}
            >
              #ПОБЕЖДАЙ!
            </span>
          </p>

          {/* Кнопка — с акцентом и "дыханием" */}
          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a
              href="/schedule"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #FF4500, #FF6347)',
              }}
            >
              Записаться на тренировку
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Анимации */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        @keyframes metal {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-metal {
          background-size: 200% auto;
          animation: metal 4s linear infinite;
        }

        /* Радиальный градиент */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, rgba(75, 85, 99, 0.3), rgba(17, 24, 39, 0.8));
        }
      `}</style>
    </div>
  );
}
