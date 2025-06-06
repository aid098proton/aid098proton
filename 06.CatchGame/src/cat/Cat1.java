package cat;

import game.Config;

/**
 * Cat1 클래스는 첫 번째 고양이 캐릭터 "춘식이"를 구현한 클래스입니다.  
 * Base 클래스를 상속받아 고양이의 기본 속성과 행동을 구현하며,  
 * 고양이 탐색 및 포획 로직을 포함합니다.
 * 
 * <p><b>특징:</b></p>
 * <ul>
 *   <li>이름: 춘식이</li>
 *   <li>나이: 3살</li>
 *   <li>성별: 수컷</li>
 *   <li>민첩성: 1</li>
 * </ul> */
public class Cat1 extends Base {

    /**
     * Cat1의 기본 생성자입니다.  
     * 춘식이의 기본 특성들을 초기화합니다.
     * - 이름을 "춘식이"로 설정
     * - 나이를 3살로 설정
     * - 성별을 수컷으로 설정
     * - 민첩성을 1로 설정
     * - 포획 확률을 50%로 설정     */
    public Cat1() {
        this.name = "춘식이";
        this.age = 3;
        this.gender = "수컷";
        this.speed = 1;
        // 포획 확률 50%
        this.catchProbability = 50;
    }

    /**
     * 춘식이를 찾는 메서드입니다.  
     * 50% 확률로 춘식이를 발견할 수 있으며, 탐색 결과를 콘솔에 출력합니다.
     *
     * @return true - 춘식이를 발견함  
     *         false - 발견하지 못함     */
    @Override
    public boolean findCat() {
        // 0 또는 1로 랜덤 결정
        int randNumber = Config.random.nextInt(2); 
        if (randNumber == 1) {
            System.out.println(Config.BLUE + "[탐색 성공]");
            System.out.println(Config.GREEN + this.name + Config.RESET + "을(를) 발견했습니다!!");
            return true;
        }
        System.out.println(Config.RED + "[탐색 실패]" + Config.RESET);
        System.out.println("풀숲을 열심히 찾았지만 아무 수확이 없었습니다..");
        return false;
    }

    /**
     * 춘식이를 포획하는 메서드입니다.  
     * - 아이템을 사용한 경우({@code item == true})에는 항상 포획에 성공합니다.  
     * - 아이템을 사용하지 않은 경우에는 90% 확률로 포획을 시도합니다.  
     * 포획에 성공하면 {@code isCatch} 상태가 {@code true}로 변경됩니다.
     *
     * @param item 아이템 사용 여부 (true: 사용, false: 미사용)
     * @return true - 포획 성공  
     *         false - 포획 실패     */
    @Override
    public boolean catchCat(boolean item) {
        // 0~99 범위에서 랜덤 확률 생성
        int randNumber = Config.random.nextInt(100); 
        // 확률이 catchProbability 이하일 때 포획 성공
        if (randNumber < this.catchProbability || item == true) {  
            System.out.println(Config.BLUE + "[잡았다!]");
            System.out.println(Config.GREEN + this.name + Config.RESET + "가(이) 야옹 소리를 내며 다가왔습니다.");
            // 포획 성공 상태 변경
            this.isCatch = true; 
            return true;
        }
        System.out.println(Config.RED + "[포획 실패..]");
        System.out.println(Config.GREEN + this.name + Config.RESET + "가(이) 도망쳤다...");
        return false;
    }
}
