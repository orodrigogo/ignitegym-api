exports.seed = async function (knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      name: 'Supino inclinado com barra',
      series: 4,
      repetitions: 12,
      group: 'peito',
      demo: 'supino_inclinado_com_barra.gif',
      thumb: 'supino_inclinado_com_barra.png',
    },
    {
      name: 'Crucifixo reto',
      series: 3,
      repetitions: 12,
      group: 'peito',
      demo: 'crucifixo_reto.gif',
      thumb: 'crucifixo_reto.png'
    },
    {
      name: 'Supino reto com barra',
      series: 3,
      repetitions: 12,
      group: 'peito',
      demo: 'supino_reto_com_barra.gif',
      thumb: 'supino_reto_com_barra.png'
    },
    {
      name: 'Francês deitado com halteres',
      series: 3,
      repetitions: 12,
      group: 'tríceps',
      demo: 'frances_deitado_com_halteres.gif',
      thumb: 'frances_deitado_com_halteres.png'
    },
    {
      name: 'Corda Cross',
      series: 4,
      repetitions: 12,
      group: 'tríceps',
      demo: 'corda_cross.gif',
      thumb: 'corda_cross.png'
    },
    {
      name: 'Barra Cross',
      series: 3,
      repetitions: 12,
      group: 'tríceps',
      demo: 'barra_cross.gif',
      thumb: 'barra_cross.png'
    },
    {
      name: 'Tríceps testa',
      series: 4,
      repetitions: 12,
      group: 'tríceps',
      demo: 'triceps_testa.gif',
      thumb: 'triceps_testa.png'
    },
    {
      name: 'Levantamento terra',
      series: 3,
      repetitions: 12,
      group: 'costas',
      demo: 'levantamento_terra.gif',
      thumb: 'levantamento_terra.png'
    },
    {
      name: 'Pulley frontal',
      series: 3,
      repetitions: 12,
      group: 'costas',
      demo: 'pulley_frontal.gif',
      thumb: 'pulley_frontal.png'
    },
    {
      name: 'Pulley atrás',
      series: 4,
      repetitions: 12,
      group: 'costas',
      demo: 'pulley_atras.gif',
      thumb: 'pulley_atras.png'
    },
    {
      name: 'Remada baixa',
      series: 4,
      repetitions: 12,
      group: 'costas',
      demo: 'remada_baixa.gif',
      thumb: 'remada_baixa.png'
    },
    {
      name: 'Serrote',
      series: 4,
      repetitions: 12,
      group: 'costas',
      demo: 'serrote.gif',
      thumb: 'serrote.png'
    },
    {
      name: 'Rosca alternada com banco inclinado',
      series: 4,
      repetitions: 12,
      group: 'bíceps',
      demo: 'rosca_alternada_com_banco_inclinado.gif',
      thumb: 'rosca_alternada_com_banco_inclinado.png'
    },
    {
      name: 'Rosca Scott barra w',
      series: 4,
      repetitions: 12,
      group: 'bíceps',
      demo: 'rosca_scott_barra_w.gif',
      thumb: 'rosca_scott_barra_w.png'
    },
    {
      name: 'Rosca direta barra reta',
      series: 3,
      repetitions: 12,
      group: 'bíceps',
      demo: 'rosca_direta_barra_reta.gif',
      thumb: 'rosca_direta_barra_reta.png'
    },
    {
      name: 'Martelo em pé',
      series: 3,
      repetitions: 12,
      group: 'bíceps',
      demo: 'martelo_em_pe.gif',
      thumb: 'martelo_em_pe.png'
    },
    {
      name: 'Rosca punho',
      series: 4,
      repetitions: 12,
      group: 'antebraço',
      demo: 'rosca_punho.gif',
      thumb: 'rosca_punho.png'
    },
    {
      name: 'Leg press 45 graus',
      series: 4,
      repetitions: 12,
      group: 'pernas',
      demo: 'leg_press_45_graus.gif',
      thumb: 'leg_press_45_graus.png'
    },
    {
      name: 'Extensor de pernas',
      series: 4,
      repetitions: 12,
      group: 'pernas',
      demo: 'extensor_de_pernas.gif',
      thumb: 'extensor_de_pernas.png'
    },
    {
      name: 'Abdutora',
      series: 4,
      repetitions: 12,
      group: 'pernas',
      demo: 'abdutora.gif',
      thumb: 'abdutora.png'
    },
    {
      name: 'Stiff',
      series: 4,
      repetitions: 12,
      group: 'pernas',
      demo: 'stiff.gif',
      thumb: 'stiff.png',
    },
    {
      name: 'Neck Press',
      series: 4,
      repetitions: 10,
      group: 'ombro',
      demo: 'neck-press.gif',
      thumb: 'neck-press.png'
    },
    {
      name: 'Desenvolvimento maquina',
      series: 3,
      repetitions: 10,
      group: 'ombro',
      demo: 'desenvolvimento_maquina.gif',
      thumb: 'desenvolvimento_maquina.png'
    },
    {
      name: 'Elevação lateral com halteres sentado',
      series: 4,
      repetitions: 10,
      group: 'ombro',
      demo: 'elevacao_lateral_com_halteres_sentado.gif',
      thumb: 'elevacao_lateral_com_halteres_sentado.png'
    },
    {
      name: 'Encolhimento com halteres',
      series: 4,
      repetitions: 10,
      group: 'trapézio',
      demo: 'encolhimento_com_halteres.gif',
      thumb: 'encolhimento_com_halteres.png'
    },
    {
      name: 'Encolhimento com barra',
      series: 4,
      repetitions: 10,
      group: 'trapézio',
      demo: 'encolhimento_com_barra.gif',
      thumb: 'encolhimento_com_barra.png'
    }
  ]);
};