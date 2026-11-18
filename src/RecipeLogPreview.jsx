import "./LifestylePreviews.css";

// 음식 사진만 기존 커버의 해당 영역을 SVG viewBox로 표시합니다.
// 폰 프레임, 카드, 제목과 재료는 모두 JSX이며 원본 이미지 파일은 수정하지 않습니다.
const recipes = [
  ["감자조림", "감자 2개, 간장 3T, 설탕 1T, 물 100ml, 참기름", "880 210 450 420"],
  ["닭갈비", "닭다리살 300g, 고추장 2T, 간장 1T, 양배추", "470 180 185 180"],
  ["된장비빔밥", "밥 1공기, 된장 1T, 상추, 오이, 참기름", "215 520 185 175"],
  ["토스트", "식빵 2장, 계란 1개, 버터, 슬라이스 치즈", "470 520 185 175"],
  ["참치김밥", "김, 밥, 참치, 당근, 단무지", "215 855 185 140"],
  ["간장계란밥", "밥 1공기, 계란, 간장, 참기름", "470 855 185 140"],
];
function Recipe({ recipe: [name, ingredients, crop] }) {
  return <div className="rl-recipe"><svg viewBox={crop} className="rl-photo" preserveAspectRatio="xMidYMid slice"><image href="/projects/receipt-log/cover.webp" width="1536" height="1024" /></svg><b>{name}</b><p>{ingredients}</p></div>;
}
export default function RecipeLogPreview() {
  return <div className="preview lp-preview rl-preview" aria-hidden="true"><div className="lp-stage"><div className="lp-phone"><div className="lp-camera"><i /></div><div className="rl-toolbar">⌕</div><div className="rl-grid">{recipes.map(recipe => <Recipe key={recipe[0]} recipe={recipe} />)}</div></div><div className="rl-detail"><Recipe recipe={recipes[0]} /></div></div></div>;
}
