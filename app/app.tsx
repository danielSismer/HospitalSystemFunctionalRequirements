export default function RequirementsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ec4d23]/5 via-white to-[#1b1560]/5 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ec4d23] to-[#1b1560] bg-clip-text text-transparent mb-4">
            Sistema de Agendamento Médico
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Requisitos Funcionais e Não Funcionais</p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Functional Requirements */}
          <div className="space-y-4">
            <div className="bg-[#ec4d23] text-white rounded-t-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Requisitos Funcionais
              </h2>
              <p className="text-white/90 mt-2">O que o sistema deve fazer</p>
            </div>

            <div className="space-y-3">
              {/* RF-1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#ec4d23]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ec4d23]/10 dark:bg-[#ec4d23]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ec4d23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RF-1: Diferenciação de Usuários</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve diferenciar os tipos de usuários por meio de uma sessão específica para cada,
                      gerido por um login: <span className="font-semibold">Paciente, Médico e Administrador</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* RF-2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#ec4d23]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ec4d23]/10 dark:bg-[#ec4d23]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ec4d23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RF-2: Gerenciamento de Consultas</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve permitir{" "}
                      <span className="font-semibold">criar, cancelar, listar e remarcar consultas</span>, sendo de
                      responsabilidade do administrador.
                    </p>
                  </div>
                </div>
              </div>

              {/* RF-3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#ec4d23]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ec4d23]/10 dark:bg-[#ec4d23]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ec4d23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RF-3: Funcionalidades do Médico</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve possibilitar ao médico a{" "}
                      <span className="font-semibold">
                        confirmação de consulta, gerar relatório e persistir os dados da sessão
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* RF-4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#ec4d23]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ec4d23]/10 dark:bg-[#ec4d23]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ec4d23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RF-4: Funcionalidades do Paciente</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O paciente deve ser capaz de{" "}
                      <span className="font-semibold">
                        agendar consulta, acessar os relatórios, visualizar receita e atestado
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* RF-5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#ec4d23]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ec4d23]/10 dark:bg-[#ec4d23]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ec4d23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RF-5: Sistema de Notificações</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve{" "}
                      <span className="font-semibold">
                        notificar o paciente das consultas que foram marcadas ou alteradas
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Functional Requirements */}
          <div className="space-y-4">
            <div className="bg-[#1b1560] text-white rounded-t-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Requisitos Não Funcionais
              </h2>
              <p className="text-white/90 mt-2">Como o sistema deve funcionar</p>
            </div>

            <div className="space-y-3">
              {/* RNF-1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#1b1560]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b1560]/10 dark:bg-[#1b1560]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1b1560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RNF-1: Performance</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve apresentar{" "}
                      <span className="font-semibold">tempo de resposta inferior a 3 segundos</span>.
                    </p>
                    <div className="mt-3 bg-[#1b1560]/5 dark:bg-[#1b1560]/20 rounded-lg p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#1b1560] dark:text-[#1b1560]/80 font-medium">Tempo máximo</span>
                        <span className="text-[#1b1560] dark:text-white font-bold">{"< 3s"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RNF-2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#1b1560]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b1560]/10 dark:bg-[#1b1560]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1b1560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RNF-2: Escalabilidade</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve ser capaz de <span className="font-semibold">escalar horizontalmente</span>.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <div className="flex-1 bg-[#1b1560]/5 dark:bg-[#1b1560]/20 rounded-lg p-2 text-center">
                        <div className="text-[#1b1560] dark:text-white text-xs font-medium">Servidor 1</div>
                      </div>
                      <div className="flex-1 bg-[#1b1560]/5 dark:bg-[#1b1560]/20 rounded-lg p-2 text-center">
                        <div className="text-[#1b1560] dark:text-white text-xs font-medium">Servidor 2</div>
                      </div>
                      <div className="flex-1 bg-[#1b1560]/5 dark:bg-[#1b1560]/20 rounded-lg p-2 text-center">
                        <div className="text-[#1b1560] dark:text-white text-xs font-medium">Servidor N</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RNF-3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#1b1560]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1b1560]/10 dark:bg-[#1b1560]/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1b1560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">RNF-3: Interoperabilidade</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      O sistema deve ser capaz de ter{" "}
                      <span className="font-semibold">interoperabilidade para integração de sistemas</span>.
                    </p>
                    <div className="mt-3 bg-[#1b1560]/5 dark:bg-[#1b1560]/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-xs text-[#1b1560] dark:text-white">
                        <span className="font-medium">APIs</span>
                        <span>•</span>
                        <span className="font-medium">REST</span>
                        <span>•</span>
                        <span className="font-medium">Webhooks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-md mt-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Resumo
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ec4d23]">5</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Requisitos Funcionais</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1b1560]">3</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Requisitos Não Funcionais</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Sistema de Agendamento Médico - Especificação de Requisitos</p>
        </div>
      </div>
    </main>
  )
}
