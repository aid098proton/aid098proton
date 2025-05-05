// 음악 목록
const musicList = [
    {
        title: 'AI Music 20250506 1',
        file: 'ai_music_20250506_1.mp3'
    },
    {
        title: 'AI Music 20250506 2',
        file: 'ai_music_20250506_2.mp3'
    },
    {
        title: 'AI Music 20250505 1',
        file: 'ai_music_20250505_1.mp3'
    },
    {
        title: 'AI Music 20250505 2',
        file: 'ai_music_20250505_2.mp3'
    },
    {
        title: 'AI Music 20250504 1',
        file: 'ai_music_20250504_1.mp3'
    },
    {
        title: 'AI Music 20250504 2',
        file: 'ai_music_20250504_2.mp3'
    },
    {
        title: 'AI Music 20250503 1',
        file: 'ai_music_20250503_1.mp3'
    },
    {
        title: 'AI Music 20250503 2',
        file: 'ai_music_20250503_2.mp3'
    },
    {
        title: 'AI Music 20250502 1',
        file: 'ai_music_20250502_1.mp3'
    },
    {
        title: 'AI Music 20250502 2',
        file: 'ai_music_20250502_2.mp3'
    },
    {
        title: 'AI Music 20250501 1',
        file: 'ai_music_20250501_1.mp3'
    },
    {
        title: 'AI Music 20250501 2',
        file: 'ai_music_20250501_2.mp3'
    },
    {
        title: 'AI Music 20250430 1',
        file: 'ai_music_20250430_1.mp3'
    },
    {
        title: 'AI Music 20250430 2',
        file: 'ai_music_20250430_2.mp3'
    },
    {
        title: 'AI Music 20250428',
        file: 'ai_music_20250428.mp3'
    },
    {
        title: 'AI Music 20250425',
        file: 'ai_music_20250425.mp3'
    }
];

let currentAudio = null;
let currentPlayingItem = null;

// 볼륨 컨트롤
const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    if (currentAudio) {
        currentAudio.volume = volume;
    }
});

// 플레이리스트 생성
const playlist = document.querySelector('.playlist');
musicList.forEach((music, index) => {
    const musicItem = document.createElement('div');
    musicItem.className = 'music-item';
    musicItem.dataset.index = index;

    const musicInfo = document.createElement('div');
    musicInfo.className = 'music-info';

    const title = document.createElement('h3');
    title.className = 'music-title';
    title.textContent = music.title;

    const playButton = document.createElement('button');
    playButton.className = 'play-button';
    playButton.textContent = '▶';

    musicInfo.appendChild(title);
    musicItem.appendChild(musicInfo);
    musicItem.appendChild(playButton);
    playlist.appendChild(musicItem);

    // 재생/중단 버튼 클릭 이벤트
    playButton.addEventListener('click', () => {
        const itemIndex = parseInt(musicItem.dataset.index);

        if (currentAudio && currentAudio.src.includes(music.file)) {
            // 현재 재생 중인 곡을 중단
            currentAudio.pause();
            currentAudio = null;
            currentPlayingItem.classList.remove('playing');
            currentPlayingItem.querySelector('.play-button').textContent = '▶';
            currentPlayingItem.querySelector('.play-button').classList.remove('playing');
            currentPlayingItem = null;
        } else {
            // 다른 곡이 재생 중이면 중단
            if (currentAudio) {
                currentAudio.pause();
                currentPlayingItem.classList.remove('playing');
                currentPlayingItem.querySelector('.play-button').textContent = '▶';
                currentPlayingItem.querySelector('.play-button').classList.remove('playing');
            }

            // 새 곡 재생
            currentAudio = new Audio(`./mp3/${music.file}`);
            currentAudio.volume = volumeControl.value / 100;
            currentAudio.play();

            // UI 업데이트
            musicItem.classList.add('playing');
            playButton.textContent = '⏹';
            playButton.classList.add('playing');
            currentPlayingItem = musicItem;

            // 재생 종료 시 UI 업데이트
            currentAudio.onended = () => {
                musicItem.classList.remove('playing');
                playButton.textContent = '▶';
                playButton.classList.remove('playing');
                currentAudio = null;
                currentPlayingItem = null;
            };
        }
    });
}); 