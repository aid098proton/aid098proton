package game;

/***
 * MainClass 클래스
 * 프로그램의 진입점(Entry Point)이 되는 메인 클래스입니다.
 * GameManager를 생성하고 게임을 시작하는 역할을 합니다.  */
public class MainClass extends java.lang.Object {
	/***
	 * 프로그램의 시작점이 되는 main 메소드
	 * GameManager 객체를 생성하고 run() 메소드를 호출하여 게임을 시작합니다.	*/
	public static void main(String[] args) {
		GameManager gameManager = new GameManager();
		gameManager.run();
	}
}
