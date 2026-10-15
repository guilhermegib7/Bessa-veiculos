const galerias = {
    saveiro: [
        'img/saveiro.jpg',
        'img/saveiro 2.jpg',
        'img/saveiro 3.jpg',
        'img/saveiro 4.jpg',
        'img/saveiro 5.jpg',
        'img/saveiro 6.jpg',
        'img/saveiro 7.jpg',
        'img/saveiro 8.jpg',
        'img/saveiro 9.jpg',
        'img/saveiro 10.jpg'
    ],
    argo: [
        'img/PHOTO-2026-10-15-19-53-22 5.jpg',
        'img/PHOTO-2026-10-15-19-53-22.jpg',
        'img/PHOTO-2026-10-15-19-53-22 2.jpg',
        'img/PHOTO-2026-10-15-19-53-22 3.jpg',
        'img/PHOTO-2026-10-15-19-53-22 4.jpg',
        'img/PHOTO-2026-10-15-19-53-22 6.jpg',
        'img/PHOTO-2026-10-15-19-53-22 7.jpg',
        'img/PHOTO-2026-10-15-19-53-22 8.jpg',
        'img/PHOTO-2026-10-15-19-53-22 9.jpg',
        'img/PHOTO-2026-10-15-19-53-22 10.jpg',
        'img/PHOTO-2026-10-15-19-53-22 11.jpg',
        'img/PHOTO-2026-10-15-19-53-22 12.jpg'
    ],
    captur: [
        'img/PHOTO-2026-10-15-19-53-22 32.jpg',
        'img/PHOTO-2026-10-15-19-53-22 25.jpg',
        'img/PHOTO-2026-10-15-19-53-22 26.jpg',
        'img/PHOTO-2026-10-15-19-53-22 27.jpg',
        'img/PHOTO-2026-10-15-19-53-22 28.jpg',
        'img/PHOTO-2026-10-15-19-53-22 29.jpg',
        'img/PHOTO-2026-10-15-19-53-22 30.jpg',
        'img/PHOTO-2026-10-15-19-53-22 31.jpg',
        'img/PHOTO-2026-10-15-19-53-22 33.jpg',
        'img/PHOTO-2026-10-15-19-53-22 34.jpg',
        'img/PHOTO-2026-10-15-19-53-22 35.jpg',
        'img/PHOTO-2026-10-15-19-53-22 36.jpg'
    ],
    sandero: [
        'img/PHOTO-2026-10-15-19-53-22 44.jpg',
        'img/PHOTO-2026-10-15-19-53-22 37.jpg',
        'img/PHOTO-2026-10-15-19-53-22 38.jpg',
        'img/PHOTO-2026-10-15-19-53-22 39.jpg',
        'img/PHOTO-2026-10-15-19-53-22 40.jpg',
        'img/PHOTO-2026-10-15-19-53-22 41.jpg',
        'img/PHOTO-2026-10-15-19-53-22 42.jpg',
        'img/PHOTO-2026-10-15-19-53-22 43.jpg',
        'img/PHOTO-2026-10-15-19-53-22 45.jpg',
        'img/PHOTO-2026-10-15-19-53-22 46.jpg'
    ],
    etios: [
        'img/PHOTO-2026-10-15-19-53-22 13.jpg',
        'img/PHOTO-2026-10-15-19-53-22 14.jpg',
        'img/PHOTO-2026-10-15-19-53-22 15.jpg',
        'img/PHOTO-2026-10-15-19-53-22 16.jpg',
        'img/PHOTO-2026-10-15-19-53-22 17.jpg',
        'img/PHOTO-2026-10-15-19-53-22 18.jpg',
        'img/PHOTO-2026-10-15-19-53-22 19.jpg',
        'img/PHOTO-2026-10-15-19-53-22 20.jpg',
        'img/PHOTO-2026-10-15-19-53-22 21.jpg',
        'img/PHOTO-2026-10-15-19-53-22 22.jpg',
        'img/PHOTO-2026-10-15-19-53-22 23.jpg',
        'img/PHOTO-2026-10-15-19-53-22 24.jpg'
    ]
};

const detalhe = document.querySelector('.detalhe-veiculo');
const detalheImagem = detalhe.querySelector('.detalhe-imagem');
const detalheTitulo = detalhe.querySelector('#detalhe-titulo');
const detalheInformacoes = detalhe.querySelector('.detalhe-informacoes');
const detalheLegenda = detalhe.querySelector('.detalhe-legenda');
const detalhePreco = detalhe.querySelector('.detalhe-preco');
const detalheInteresse = detalhe.querySelector('.detalhe-interesse');
let galeriaAtiva = null;
let cartaoAtivo = null;

function atualizarImagem(galeria) {
    const foto = galerias[galeria.veiculo.dataset.galeria][galeria.fotoAtual];
    galeria.imagem.src = foto;

    if (galeriaAtiva === galeria) {
        detalheImagem.src = foto;
    }
}

function moverFoto(direcao) {
    if (!galeriaAtiva) {
        return;
    }

    const fotos = galerias[galeriaAtiva.veiculo.dataset.galeria];
    galeriaAtiva.fotoAtual = (galeriaAtiva.fotoAtual + direcao + fotos.length) % fotos.length;
    atualizarImagem(galeriaAtiva);
}

function abrirDetalhes(veiculo, galeria) {
    galeriaAtiva = galeria;
    cartaoAtivo = veiculo;
    detalheTitulo.textContent = veiculo.querySelector('h3').textContent;
    detalheInformacoes.textContent = [...veiculo.querySelectorAll(':scope > p:not(.preco-legenda)')]
        .map((paragrafo) => paragrafo.textContent.trim())
        .filter(Boolean)
        .join(' · ');
    detalheLegenda.textContent = veiculo.querySelector('.preco-legenda')?.textContent ?? '';
    detalhePreco.textContent = veiculo.querySelector('.preco')?.textContent ?? '';
    detalheInteresse.href = veiculo.querySelector('.btn-interesse').href;
    detalheImagem.alt = veiculo.querySelector('.carrosel img').alt;
    atualizarImagem(galeria);
    detalhe.showModal();
}

document.querySelectorAll('.veiculo[data-galeria]').forEach((veiculo) => {
    const fotos = galerias[veiculo.dataset.galeria];
    const imagem = veiculo.querySelector('.carrosel img');
    const btnVoltar = veiculo.querySelector('.btn-voltar');
    const btnAvancar = veiculo.querySelector('.btn-avancar');

    if (!fotos || !imagem || !btnVoltar || !btnAvancar) {
        console.error('Não foi possível inicializar o carrossel do veículo:', veiculo);
        return;
    }

    const galeria = { veiculo, imagem, fotoAtual: 0 };
    imagem.src = fotos[galeria.fotoAtual];
    veiculo.tabIndex = 0;
    veiculo.setAttribute('aria-label', `Ver fotos e informações de ${veiculo.querySelector('h3').textContent}`);

    btnAvancar.addEventListener('click', () => {
        galeria.fotoAtual = (galeria.fotoAtual + 1) % fotos.length;
        atualizarImagem(galeria);
    });

    btnVoltar.addEventListener('click', () => {
        galeria.fotoAtual = (galeria.fotoAtual - 1 + fotos.length) % fotos.length;
        atualizarImagem(galeria);
    });

    veiculo.addEventListener('click', (evento) => {
        if (evento.target.closest('button, a')) {
            return;
        }

        abrirDetalhes(veiculo, galeria);
    });

    veiculo.addEventListener('keydown', (evento) => {
        if ((evento.key === 'Enter' || evento.key === ' ') && evento.target === veiculo) {
            evento.preventDefault();
            abrirDetalhes(veiculo, galeria);
        }
    });
});

detalhe.querySelector('.detalhe-voltar').addEventListener('click', () => moverFoto(-1));
detalhe.querySelector('.detalhe-avancar').addEventListener('click', () => moverFoto(1));
detalhe.querySelector('.detalhe-fechar').addEventListener('click', () => detalhe.close());
detalhe.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
        evento.preventDefault();
        detalhe.close();
    } else if (evento.key === 'ArrowLeft') {
        moverFoto(-1);
    } else if (evento.key === 'ArrowRight') {
        moverFoto(1);
    }
});
detalhe.addEventListener('click', (evento) => {
    if (evento.target === detalhe) {
        detalhe.close();
    }
});
detalhe.addEventListener('close', () => {
    cartaoAtivo?.focus();
    cartaoAtivo = null;
    galeriaAtiva = null;
});
