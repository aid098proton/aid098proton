// 음악 목록
const musicList = [
    {
        title: 'AI Music 20250522 1',
        file: 'ai_music_20250522_1.mp3'
    },
    {
        title: 'AI Music 20250522 2',
        file: 'ai_music_20250522_2.mp3'
    },
    {
        title: 'AI Music 20250521 1',
        file: 'ai_music_20250521_1.mp3'
    },
    {
        title: 'AI Music 20250521 2',
        file: 'ai_music_20250521_2.mp3'
    },
    {
        title: 'AI Music 20250520 1',
        file: 'ai_music_20250520_1.mp3'
    },
    {
        title: 'AI Music 20250520 2',
        file: 'ai_music_20250520_2.mp3'
    },
    {
        title: 'AI Music 20250519 1',
        file: 'ai_music_20250519_1.mp3'
    },
    {
        title: 'AI Music 20250519 2',
        file: 'ai_music_20250519_2.mp3'
    },
    {
        title: 'AI Music 20250518 1',
        file: 'ai_music_20250518_1.mp3'
    },
    {
        title: 'AI Music 20250518 2',
        file: 'ai_music_20250518_2.mp3'
    },
    {
        title: 'AI Music 20250517 1',
        file: 'ai_music_20250517_1.mp3'
    },
    {
        title: 'AI Music 20250517 2',
        file: 'ai_music_20250517_2.mp3'
    },
    {
        title: 'AI Music 20250516 1',
        file: 'ai_music_20250516_1.mp3'
    },
    {
        title: 'AI Music 20250516 2',
        file: 'ai_music_20250516_2.mp3'
    },
    {
        title: 'AI Music 20250515 1',
        file: 'ai_music_20250515_1.mp3'
    },
    {
        title: 'AI Music 20250515 2',
        file: 'ai_music_20250515_2.mp3'
    },
    {
        title: 'AI Music 20250514 1',
        file: 'ai_music_20250514_1.mp3'
    },
    {
        title: 'AI Music 20250514 2',
        file: 'ai_music_20250514_2.mp3'
    },
    {
        title: 'AI Music 20250513 1',
        file: 'ai_music_20250513_1.mp3'
    },
    {
        title: 'AI Music 20250513 2',
        file: 'ai_music_20250513_2.mp3'
    },
    {
        title: 'AI Music 20250512 1',
        file: 'ai_music_20250512_1.mp3'
    },
    {
        title: 'AI Music 20250512 2',
        file: 'ai_music_20250512_2.mp3'
    },
    {
        title: 'AI Music 20250511 1',
        file: 'ai_music_20250511_1.mp3'
    },
    {
        title: 'AI Music 20250511 2',
        file: 'ai_music_20250511_2.mp3'
    },
    {
        title: 'AI Music 20250510 1',
        file: 'ai_music_20250510_1.mp3'
    },
    {
        title: 'AI Music 20250510 2',
        file: 'ai_music_20250510_2.mp3'
    },
    {
        title: 'AI Music 20250509 1',
        file: 'ai_music_20250509_1.mp3'
    },
    {
        title: 'AI Music 20250509 2',
        file: 'ai_music_20250509_2.mp3'
    },
    {
        title: 'AI Music 20250508 1',
        file: 'ai_music_20250508_1.mp3'
    },
    {
        title: 'AI Music 20250508 2',
        file: 'ai_music_20250508_2.mp3'
    },
    {
        title: 'AI Music 20250507 1',
        file: 'ai_music_20250507_1.mp3'
    },
    {
        title: 'AI Music 20250507 2',
        file: 'ai_music_20250507_2.mp3'
    },
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

// 플레이어 상태 관리
let currentAudio = null;
let currentIndex = null;
let currentPlayingItem = null;
let isRandom = false;
let isAutoplay = false;

// DOM 요소 가져오기
const volumeControl = document.getElementById('volume');
const playlist = document.querySelector('.playlist');
const playerControls = document.querySelector('.player-controls');
const randomToggle = document.getElementById('random-toggle');
const autoplayToggle = document.getElementById('autoplay-toggle');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// 볼륨 컨트롤
volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    if (currentAudio) {
        currentAudio.volume = volume;
    }
    updateVolumeIcon(volume);
});

// 볼륨 아이콘 업데이트
function updateVolumeIcon(volume) {
    const volumeIcon = document.querySelector('.volume-icon');

    if (volume === 0) {
        volumeIcon.textContent = '🔇';
    } else if (volume < 0.3) {
        volumeIcon.textContent = '🔈';
    } else if (volume < 0.7) {
        volumeIcon.textContent = '🔉';
    } else {
        volumeIcon.textContent = '🔊';
    }
}

// 무작위 재생 토글
randomToggle.addEventListener('click', () => {
    isRandom = !isRandom;
    randomToggle.classList.toggle('active', isRandom);
});

// 자동 재생 토글
autoplayToggle.addEventListener('click', () => {
    isAutoplay = !isAutoplay;
    autoplayToggle.classList.toggle('active', isAutoplay);
});

// 이전 곡 재생
prevButton.addEventListener('click', () => {
    if (currentIndex !== null) {
        playPreviousSong();
    }
});

// 다음 곡 재생
nextButton.addEventListener('click', () => {
    if (currentIndex !== null) {
        playNextSong();
    }
});

// 플레이리스트 생성
function createPlaylist() {
    playlist.innerHTML = '';
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
        playButton.innerHTML = '<i class="play-icon">▶</i>';

        musicInfo.appendChild(title);
        musicItem.appendChild(musicInfo);
        musicItem.appendChild(playButton);
        playlist.appendChild(musicItem);

        // 재생/중단 버튼 클릭 이벤트
        playButton.addEventListener('click', () => {
            const itemIndex = parseInt(musicItem.dataset.index);
            playSong(itemIndex);
        });
    });
}

// 곡 재생 함수
function playSong(index) {
    const music = musicList[index];

    // 같은 곡이 재생 중이면 중단
    if (currentAudio && currentIndex === index) {
        pauseCurrentSong();
        return;
    }

    // 다른 곡이 재생 중이면 중단
    if (currentAudio) {
        pauseCurrentSong(false);
    }

    // 새 곡 재생
    currentAudio = new Audio(`./mp3/${music.file}`);
    currentAudio.volume = volumeControl.value / 100;
    currentIndex = index;

    // 곡이 끝났을 때 다음 곡 재생 설정
    currentAudio.onended = () => {
        const currentItem = document.querySelector(`.music-item[data-index="${index}"]`);
        currentItem.classList.remove('playing');
        currentItem.querySelector('.play-button').innerHTML = '<i class="play-icon">▶</i>';
        currentItem.querySelector('.play-button').classList.remove('playing');

        if (isAutoplay) {
            playNextSong();
        } else {
            currentAudio = null;
            currentPlayingItem = null;
            currentIndex = null;
        }
    };

    // 재생 시작
    currentAudio.play();

    // UI 업데이트
    const currentItem = document.querySelector(`.music-item[data-index="${index}"]`);
    currentItem.classList.add('playing');
    currentItem.querySelector('.play-button').innerHTML = '<i class="pause-icon">⏹</i>';
    currentItem.querySelector('.play-button').classList.add('playing');
    currentPlayingItem = currentItem;

    // 현재 곡 표시를 위해 스크롤
    currentItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 현재 재생 중인 곡 일시 정지
function pauseCurrentSong(resetCurrent = true) {
    if (!currentAudio) return;

    currentAudio.pause();
    currentPlayingItem.classList.remove('playing');
    currentPlayingItem.querySelector('.play-button').innerHTML = '<i class="play-icon">▶</i>';
    currentPlayingItem.querySelector('.play-button').classList.remove('playing');

    if (resetCurrent) {
        currentAudio = null;
        currentPlayingItem = null;
        currentIndex = null;
    }
}

// 다음 곡 재생
function playNextSong() {
    if (currentIndex === null) return;

    let nextIndex;

    if (isRandom) {
        // 랜덤 재생 - 현재 곡을 제외한 랜덤 인덱스 선택
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * musicList.length);
        } while (randomIndex === currentIndex);
        nextIndex = randomIndex;
    } else {
        // 순차 재생
        nextIndex = (currentIndex + 1) % musicList.length;
    }

    playSong(nextIndex);
}

// 이전 곡 재생
function playPreviousSong() {
    if (currentIndex === null) return;

    let prevIndex;

    if (isRandom) {
        // 랜덤 재생 - 현재 곡을 제외한 랜덤 인덱스 선택
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * musicList.length);
        } while (randomIndex === currentIndex);
        prevIndex = randomIndex;
    } else {
        // 순차 재생
        prevIndex = (currentIndex - 1 + musicList.length) % musicList.length;
    }

    playSong(prevIndex);
}

// 검색 기능
function searchMusic(query) {
    const normalizedQuery = query.toLowerCase().trim();

    document.querySelectorAll('.music-item').forEach(item => {
        const title = item.querySelector('.music-title').textContent.toLowerCase();
        if (title.includes(normalizedQuery)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // 결과가 없을 때 메시지 표시
    const noResults = document.getElementById('no-results');
    const hasVisibleItems = Array.from(document.querySelectorAll('.music-item')).some(item => item.style.display !== 'none');

    if (noResults) {
        noResults.style.display = hasVisibleItems ? 'none' : 'block';
    }
}

// 검색 이벤트 리스너
document.getElementById('search-input').addEventListener('input', (e) => {
    searchMusic(e.target.value);
});

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    // 입력 필드에 포커스가 있을 때는 단축키 비활성화
    if (document.activeElement.tagName === 'INPUT') return;

    switch (e.code) {
        case 'Space': // 재생/일시정지
            e.preventDefault();
            if (currentIndex !== null) {
                playSong(currentIndex);
            }
            break;
        case 'ArrowRight': // 다음 곡
            if (currentIndex !== null) {
                playNextSong();
            }
            break;
        case 'ArrowLeft': // 이전 곡
            if (currentIndex !== null) {
                playPreviousSong();
            }
            break;
        case 'KeyR': // 랜덤 재생 토글
            randomToggle.click();
            break;
        case 'KeyA': // 자동 재생 토글
            autoplayToggle.click();
            break;
    }
});

// 모바일에서 스와이프로 다음/이전 곡 전환
let touchStartX = 0;
let touchEndX = 0;

playlist.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

playlist.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 100;

    if (touchEndX - touchStartX > swipeThreshold && currentIndex !== null) {
        // 오른쪽으로 스와이프 - 이전 곡
        playPreviousSong();
    } else if (touchStartX - touchEndX > swipeThreshold && currentIndex !== null) {
        // 왼쪽으로 스와이프 - 다음 곡
        playNextSong();
    }
}

// 초기화
createPlaylist();
updateVolumeIcon(volumeControl.value / 100);