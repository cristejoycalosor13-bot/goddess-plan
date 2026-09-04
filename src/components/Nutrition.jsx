import { useState, useEffect } from 'react';
import { INGREDIENT_RECIPES } from '../data/ingredients';
import IngredientDetailPage from './IngredientDetailPage';

export const TABS = [
  { id: 'meat',    icon: '🍑', title: 'Glute Days · Mon · Wed · Fri', desc: 'You eat from the moment you wake, because you are lifting. Banana & coffee on waking, banana & protein after training, protein & carbs at 5 PM.' },
  { id: 'light',   icon: '🌱', title: 'Core Days · Tue · Thu · Sat · Sun', desc: 'Nothing before noon, nothing after five. Yogurt bowl or fruit at 12 PM, egg & sweet potato at 5 PM.' },
  { id: 'recipes', icon: '🥘', title: 'Recipes & Hydration',    desc: 'Prep every food — steamed, boiled, oil-free. Tap for methods.' },
  { id: 'guide',   icon: '📊', title: 'Food Guide',             desc: 'Eat/avoid rules for a flat stomach and calm gut.' },
];

/* ─── RECIPE CATEGORIES shown in the Recipes tab ─── */
const RECIPE_CATEGORIES = [
  {
    title: 'Protein (fish on glute days · eggs & tofu any day)',
    items: [
      { key: 'egg',     label: 'Eggs' },
      { key: 'fish',    label: 'Fish' },
      { key: 'tofu',    label: 'Tofu' },
    ],
  },
  {
    title: 'The Yogurt Bowl (make it the night before)',
    items: [
      { key: 'yogurtbowl', label: 'Yogurt Bowl' },
    ],
  },
  {
    title: 'Fruits (Smoothie Bowls)',
    items: [
      { key: 'papaya',    label: 'Papaya' },
      { key: 'pineapple', label: 'Pineapple' },
      { key: 'watermelon', label: 'Watermelon' },
      { key: 'apple',     label: 'Apple' },
      { key: 'banana',    label: 'Banana' },
      { key: 'berries',   label: 'Berries' },
    ],
  },
  {
    title: 'Veg & Extras',
    items: [
      { key: 'broccoli', label: 'Broccoli' },
      { key: 'salad',    label: 'Salad' },
      { key: 'avocado',  label: 'Avocado' },
      { key: 'chia',     label: 'Chia' },
    ],
  },
];

/* ─── GLUTE DAYS (Mon, Wed, Fri) ─── */
export function MeatDays() {
  return (
    <>
      <div className="note-box note-rose" style={{ marginBottom: 14 }}>
        🍑 <strong>Glute days: Monday, Wednesday &amp; Friday.</strong> These are the days you eat early, because you are about to lift. They are also your <strong>only fish days</strong>.
      </div>
      <div className="note-box note-gold" style={{ marginBottom: 18 }}>
        🍌 <strong>A banana on both sides of the session.</strong> One before, so you have fuel in your legs. One straight after, so you put back what you burned. This is the non-negotiable part of a glute day.
      </div>
      <div className="g-card splash-item" style={{ marginBottom: 18 }}>
        <div className="hyd-timeline">
          <div className="hyd-row">
            <div className="hyd-time">On waking</div>
            <div>
              <div className="hyd-d">Banana &amp; coffee</div>
              <div className="hyd-n">Eat the moment you get up — banana first, coffee second. Any carb works if you would rather: sweet potato, mango, a fruit plate. Or have the overnight yogurt bowl instead.</div>
            </div>
          </div>
          <div className="hyd-row">
            <div className="hyd-time">After training</div>
            <div>
              <div className="hyd-d">Banana &amp; protein</div>
              <div className="hyd-n">Second banana straight after the last set, then your protein — fish, eggs or tofu. Salmon, sardines, tuna, tilapia, any fish. Oil-free, no salt.</div>
            </div>
          </div>
          <div className="hyd-row">
            <div className="hyd-time">5:00 PM</div>
            <div>
              <div className="hyd-d">Protein again + any carbs you want</div>
              <div className="hyd-n">Protein a second time, and this is the meal where carbs are open — rice, sweet potato, banana, whatever you feel like. Nothing after sunset except tea.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="note-box note-rose">
        🐟 <strong>Protein for the glutes:</strong> fish, eggs or tofu — nothing else. No chicken, beef or pork on any day. Eat the protein first, then your fats and veggies.
      </div>
    </>
  );
}

/* ─── CORE DAYS (Tue, Thu, Sat, Sun) — the 12–5 window ─── */
export function LightDays() {
  return (
    <>
      <div className="note-box note-gold" style={{ marginBottom: 14 }}>
        🌱 <strong>Back, shoulder &amp; core days — plus the weekend.</strong> Tuesday, Thursday, Saturday &amp; Sunday. Nothing before <strong>12 PM</strong>, nothing after <strong>5 PM</strong>. Two meals inside that five-hour window.
      </div>
      <div className="g-card splash-item" style={{ marginBottom: 18 }}>
        <div className="hyd-timeline">
          <div className="hyd-row">
            <div className="hyd-time">Morning</div>
            <div>
              <div className="hyd-d">Nothing yet — water, black coffee or tea</div>
              <div className="hyd-n">The fast runs until noon. Train on it if you want; these are the light days, so it holds up fine.</div>
            </div>
          </div>
          <div className="hyd-row">
            <div className="hyd-time">12:00 PM</div>
            <div>
              <div className="hyd-d">Yogurt bowl, or mostly fruit</div>
              <div className="hyd-n">Either the overnight yogurt bowl — yogurt, protein powder, psyllium husk and 10 blueberries — or a plate of fruit: papaya, mango, banana, berries, watermelon.</div>
            </div>
          </div>
          <div className="hyd-row">
            <div className="hyd-time">5:00 PM</div>
            <div>
              <div className="hyd-d">Egg &amp; sweet potato</div>
              <div className="hyd-n">Or something like it — the point is protein plus a slow carb to close the window. No fish today. Nothing after five except spearmint or ginger tea.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="note-box note-rose">
        🥣 <strong>The yogurt bowl is made the night before.</strong> Yogurt, a scoop of protein powder, a teaspoon of psyllium husk, 10 blueberries. It sets overnight and is ready whenever you break the fast — noon on these days, or on waking before a glute session.
      </div>
    </>
  );
}

/* ─── RECIPE CARD ─── */
export function RecipeCard({ itemKey, label, onSelect }) {
  const data = INGREDIENT_RECIPES[itemKey];
  if (!data) return null;
  return (
    <button className="recipe-item-btn" onClick={() => onSelect({ key: itemKey, name: label })}>
      <span className="recipe-item-emoji">{data.emoji}</span>
      <div className="recipe-item-text">
        <div className="recipe-item-name">{label}</div>
        <div className="recipe-item-tagline">{data.tagline}</div>
      </div>
      <span className="recipe-item-arrow">›</span>
    </button>
  );
}

/* ─── HYDRATION (embedded inside Recipes) ─── */
function HydrationSection() {
  const rows = [
    { time: 'On waking',   d: '500ml warm water + fresh lemon or calamansi',   n: 'Wake digestion and add Vitamin C before anything else.' },
    { time: 'Between meals', d: 'Plain water + green tea (unsweetened)',        n: 'Sip between meals on both day types — and all through the morning fast on core days. Water and green tea support fullness, metabolism, and clear skin.' },
    { time: 'Psyllium',    d: '1 tbsp psyllium husk in a full glass of water',  n: 'Take between meals to stay full and support digestion. Already in the yogurt bowl — always drink a full glass of water with it.' },
    { time: '5 PM meal',   d: 'Water — sip, don\'t gulp · collagen optional',   n: 'Sip around your meal; do not drown it. Dairy-free collagen supports skin, hair, joints, and gut.' },
    { time: 'After sunset', d: 'Spearmint or ginger tea',                       n: 'Drink after your last meal. No food after 5 PM.' },
    { time: 'All day',     d: 'Plain water — 2–2.5L total, sipped slowly',      n: 'Sip steadily to reduce bloat and puffiness.' },
  ];
  return (
    <>
      <div className="divider splash-item" style={{ marginTop: 28 }}>💧 Hydration</div>
      <div className="note-box note-gold" style={{ marginBottom: 14 }}>
        💧 Drinks matter too. Keep them zero or near-zero sugar for skin, digestion, and hormones.
      </div>
      <div className="g-card">
        <div className="hyd-timeline">
          {rows.map((r, i) => (
            <div key={i} className="hyd-row">
              <div className="hyd-time">{r.time}</div>
              <div><div className="hyd-d">{r.d}</div><div className="hyd-n">{r.n}</div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="note-box note-rose" style={{ marginTop: 14 }}>
        ✕ Avoid completely (the O·D·S of GODSSSS): oils in drinks, milk &amp; dairy, sugary drinks, store-bought juices, soda, flavoured water, and alcohol.
      </div>
    </>
  );
}

/* ─── RECIPES PANEL ─── */
export function RecipesPanel({ onSelectRecipe }) {
  return (
    <>
      <div className="note-box note-gold" style={{ marginBottom: 18 }}>
        🥘 Tap any food for prep options. Follow the plan: steamed or boiled, <strong>no oil, no dairy, no gluten</strong>. Eat fruit fresh and alone.
      </div>
      {RECIPE_CATEGORIES.map(cat => (
        <div key={cat.title}>
          <div className="recipe-section-title">{cat.title}</div>
          <div className="recipe-grid">
            {cat.items.map(item => (
              <RecipeCard key={item.key} itemKey={item.key} label={item.label} onSelect={onSelectRecipe} />
            ))}
          </div>
        </div>
      ))}
      <HydrationSection />
    </>
  );
}

/* ─── FOOD GUIDE ─── */
export function FoodGuide() {
  const eat = [
    { food: 'Papaya', note: 'Papain helps reduce bloating. Anti-inflammatory. Any day.' },
    { food: 'Pineapple', note: 'Bromelain aids digestion. Great glute-day breakfast.' },
    { food: 'Kiwi', note: 'Actinidin + high Vitamin C for collagen support. Low-bloat.' },
    { food: 'Watermelon', note: 'Hydrating, low calorie. Eat alone; it digests fast.' },
    { food: 'Berries', note: 'Lowest-sugar fruit, high fibre and antioxidants. Gentle on the gut, great any day.' },
    { food: 'Banana', note: 'The glute-day fuel — one before training and one straight after, every time. Potassium also reduces water retention.' },
    { food: 'Apple', note: 'Pectin fibre feeds good gut bacteria. Eat with the skin. Any day.' },
    { food: 'Yogurt bowl', note: 'Plain yogurt + protein powder + psyllium husk + 10 blueberries, set overnight. Noon on core days, or on waking before a glute session.' },
    { food: 'Fish (tilapia/bangus)', note: 'Glute days only (Mon · Wed · Fri). Omega-3 lowers inflammation. Steam with ginger + lemon.' },
    { food: 'Eggs (boiled/poached)', note: 'Any day — after training on glute days, and the 5 PM meal on core days. No oil, no butter. ~6g protein each.' },
    { food: 'Zucchini / carrots / spinach', note: 'Low-bloat vegetables. Steam them, no oil.' },
    { food: 'Cucumber', note: 'Eat freely, raw. 95% water, naturally anti-bloating.' },
    { food: 'Avocado', note: '½ per serving. Natural fat for hormones (this is a whole food, not an added oil).' },
  ];
  const avoid = [
    { food: 'Gluten — bread, pasta, pandesal, flour', note: 'The G in GODSSSS. Causes bloating and water retention.' },
    { food: 'Oils — fried food, cooking oil', note: 'The O. Steam and boil instead. Whole-food fats (avocado) are fine; added oils are not.' },
    { food: 'Dairy — milk, cheese, cream', note: 'The D. Triggers bloating and hormonal breakouts. Use dairy-free collagen instead. The one exception is the yogurt in your overnight bowl — plain and unsweetened, nothing else.' },
    { food: 'Added sugar & sweets', note: 'The first S. Ages skin (glycation), feeds bad gut bacteria. Get sweetness from fruit only.' },
    { food: 'Salty / processed food', note: 'The second S. Salt = water retention = puffiness. Season lightly.' },
    { food: 'White rice', note: 'Spikes blood sugar fast. Sweet potato in small amounts is the better carb.' },
  ];
  return (
    <>
      <div className="note-box note-gold" style={{ marginBottom: 14 }}>
        📊 Follow <strong>PFBS</strong> (Protein, Fruits, Bland, Small) and avoid <strong>GODSSSS</strong> (Gluten, Oils, Dairy, too Sweet, too Salty, Stress — plus good Sleep).
      </div>
      <div className="divider splash-item">✓ Eat Freely</div>
      <div className="g-card splash-item" style={{ overflowX: 'auto', marginBottom: 18 }}>
        <table className="fancy-table" style={{ width: '100%' }}>
          <thead><tr><th>Food</th><th>Why</th></tr></thead>
          <tbody>
            {eat.map((r, i) => (
              <tr key={i}><td><strong>{r.food}</strong></td><td>{r.note}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="divider splash-item">✕ Avoid — GODSSSS</div>
      <div className="g-card splash-item" style={{ overflowX: 'auto' }}>
        <table className="fancy-table" style={{ width: '100%' }}>
          <thead><tr><th>Avoid</th><th>Why</th></tr></thead>
          <tbody>
            {avoid.map((r, i) => (
              <tr key={i}><td style={{ color: 'var(--rose)', fontWeight: 600 }}>{r.food}</td><td>{r.note}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const PANELS = { meat: MeatDays, light: LightDays, guide: FoodGuide };
const TAB_ALIASES = { hydration: 'recipes', snacks: 'recipes' };
const resolveTab = (t) => (t ? TAB_ALIASES[t] || t : null);

/* ─── Main Component ─── */
export default function Nutrition({ initialTab, onNavigate, pushBack, clearInnerBack }) {
  const [detail, setDetail]                 = useState(resolveTab(initialTab));
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function selectRecipe(item) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    clearInnerBack?.();
    setSelectedRecipe(item);
    pushBack?.(() => {
      setSelectedRecipe(null);
      clearInnerBack?.();
    });
  }

  function closeRecipe() {
    clearInnerBack?.();
    setSelectedRecipe(null);
  }

  useEffect(() => {
    if (!detail) return;
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (selectedRecipe) setSelectedRecipe(null);
        else setDetail(null);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        e.stopImmediatePropagation();
        onNavigate?.('home');
      }
    };
    window.addEventListener('keydown', handler, true);
    return () => window.removeEventListener('keydown', handler, true);
  }, [detail, selectedRecipe, onNavigate]);

  /* Recipe detail page (from Recipes tab) */
  if (detail === 'recipes' && selectedRecipe) {
    return (
      <IngredientDetailPage
        ingredientKey={selectedRecipe.key}
        ingredientName={selectedRecipe.name}
        backLabel="Recipes"
        onBack={closeRecipe}
        pushBack={pushBack}
      />
    );
  }

  /* Standard panel detail pages (meat / light / guide) */
  if (detail && detail !== 'recipes') {
    const Panel = PANELS[detail];
    const tab   = TABS.find(t => t.id === detail);
    return (
      <div className="section">
        <button className="section-back-btn" onClick={() => setDetail(null)}>‹ Nutrition</button>
        <div className="s-header" style={{ paddingTop: 8 }}>
          <h2 className="s-title">{tab.icon} {tab.title}</h2>
          <p className="s-desc">{tab.desc}</p>
        </div>
        <Panel />
      </div>
    );
  }

  /* Recipes panel */
  if (detail === 'recipes') {
    const tab = TABS.find(t => t.id === 'recipes');
    return (
      <div className="section">
        <button className="section-back-btn" onClick={() => setDetail(null)}>‹ Nutrition</button>
        <div className="s-header" style={{ paddingTop: 8 }}>
          <h2 className="s-title">{tab.icon} {tab.title}</h2>
          <p className="s-desc">{tab.desc}</p>
        </div>
        <RecipesPanel onSelectRecipe={selectRecipe} />
      </div>
    );
  }

  /* Landing page */
  return (
    <div className="section">
      <div className="s-header">
        <div className="s-tag">Fuel Protocol · two clocks, one for each kind of day</div>
        <h2 className="s-title">Nutrition <em>&amp; Recipes</em></h2>
        <p className="s-desc">Glute days you eat on waking — banana &amp; coffee, banana &amp; protein after training, protein &amp; carbs at 5 PM. Every other day is a 12–5 window: yogurt bowl or fruit at noon, egg &amp; sweet potato at five. Fish only on glute days.</p>
      </div>
      <div className="nutr-landing splash-item">
        {TABS.map(t => (
          <button key={t.id} className="nutr-card" onClick={() => setDetail(t.id)}>
            <div className="nutr-card-icon">{t.icon}</div>
            <div className="nutr-card-body">
              <div className="nutr-card-title">{t.title}</div>
              <div className="nutr-card-desc">{t.desc}</div>
            </div>
            <span className="nutr-card-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
