/**
 * 학습 일정 관련 날짜 계산 스크립트
 * - 입학일: 2025년 3월 4일
 * - 수료일: 2026년 2월 4일
 */

document.addEventListener('DOMContentLoaded', function () {
    // 날짜 계산 함수 실행
    calculateAnniversaryDates();
});

/**
 * 입학일부터 지난 일수와 수료일까지 남은 일수를 계산하여 표시
 */
function calculateAnniversaryDates() {
    // 입학일과 수료일 설정
    const startDate = new Date('2025-03-04');
    const endDate = new Date('2026-02-04');

    // 오늘 날짜 (시간은 00:00:00으로 설정하여 일수만 정확히 계산)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 입학일부터 지난 일수 계산 (당일은 1일차로 계산)
    const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

    // 수료일까지 남은 일수 계산 (당일은 D-day로 계산)
    const daysUntilEnd = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));

    // HTML 요소에 결과 표시
    const daysSinceStartElement = document.getElementById('days-since-start');
    const daysUntilEndElement = document.getElementById('days-until-end');

    // 음수 일수 처리 (아직 입학전이거나 이미 수료한 경우)
    if (daysSinceStart < 1) {
        daysSinceStartElement.textContent = `입학 D-${Math.abs(daysSinceStart) + 1}`;
    } else {
        daysSinceStartElement.textContent = `${daysSinceStart}일째`;
    }

    if (daysUntilEnd < 0) {
        daysUntilEndElement.textContent = `수료 완료!`;
    } else if (daysUntilEnd === 0) {
        daysUntilEndElement.textContent = `오늘이 D-day!`;
    } else {
        daysUntilEndElement.textContent = `D-${daysUntilEnd}`;
    }

    // 🔹 자퇴일 관련 계산
    const dropoutDate = new Date('2025-05-28');
    const daysSinceDropout = Math.floor((today - dropoutDate) / (1000 * 60 * 60 * 24)) + 1;

    const daysSinceDropoutElement = document.getElementById('days-since-dropout');
    if (daysSinceDropoutElement) {
        if (daysSinceDropout < 1) {
            daysSinceDropoutElement.textContent = `자퇴 D-${Math.abs(daysSinceDropout) + 1}`;
        } else {
            daysSinceDropoutElement.textContent = `${daysSinceDropout}일째`;
        }
    }
}