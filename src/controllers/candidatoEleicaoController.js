const CandidatoEleicao = require('../models/candidatoEleicao');

exports.associarCandidatoEleicao = (req, res) => {
    const { eleicaoId, candidatoId } = req.body;
    if (!eleicaoId || !candidatoId) {
        return res.status(400).send({ error: 'EleicaoId e CandidatoId são necessários' });
    }

    CandidatoEleicao.create({ eleicaoId, candidatoId }, (err, id) => {
        if (err) {
            console.error('Erro ao associar candidato à eleição:', err);
            return res.status(500).send({ error: 'Erro ao associar candidato à eleição' });
        }
        res.status(201).send({ message: 'Candidato associado com sucesso', id });
    });
};
