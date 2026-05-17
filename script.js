// ================================================================================
// DOM REFERENCES
// ================================================================================

const boardEl = document.getElementById("board");
const cornerMarkInput = document.getElementById("cornerMarkInput");
const jsonBox = document.getElementById("jsonBox");
const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");

const worldNameInput = document.getElementById("worldNameInput");
const worldDescriptionInput = document.getElementById("worldDescriptionInput");
const worldDescriptionCount = document.getElementById("worldDescriptionCount");
const worldRulesInput = document.getElementById("worldRulesInput");

const presetNameInput = document.getElementById("presetNameInput");
const presetSelect = document.getElementById("presetSelect");
const savePresetBtn = document.getElementById("savePresetBtn");
const saveStatusMessage = document.getElementById("saveStatusMessage");
const loadPresetBtn = document.getElementById("loadPresetBtn");
const deletePresetBtn = document.getElementById("deletePresetBtn");

const modeReadout = document.getElementById("modeReadout");
const pieceReadout = document.getElementById("pieceReadout");
const teamReadout = document.getElementById("teamReadout");
const movingReadout = document.getElementById("movingReadout");
const turnReadout = document.getElementById("turnReadout");
const whiteTimerReadout = document.getElementById("whiteTimerReadout");
const blackTimerReadout = document.getElementById("blackTimerReadout");
const timerSelect = document.getElementById("timerSelect");
const passTurnBtn = document.getElementById("passTurnBtn");

const toolButtons = Array.from(document.querySelectorAll(".tool-btn"));
const shortcutHelpBtn = document.getElementById("shortcutHelpBtn");
const shortcutHelpPanel = document.getElementById("shortcutHelpPanel");

const fillBoardTileBtn = document.getElementById("fillBoardTileBtn");
const clearBoardTilesBtn = document.getElementById("clearBoardTilesBtn");
const terrainEditorList = document.getElementById("terrainEditorList");
const addTerrainBtn = document.getElementById("addTerrainBtn");
const counterEditorList = document.getElementById("counterEditorList");
const addCounterBtn = document.getElementById("addCounterBtn");
const conditionEditorList = document.getElementById("conditionEditorList");
const addConditionBtn = document.getElementById("addConditionBtn");

let tileButtons = Array.from(document.querySelectorAll(".tile-btn"));
let markColorButtons = Array.from(document.querySelectorAll(".mark-color-btn"));
let conditionButtons = Array.from(document.querySelectorAll(".condition-btn"));
const tileButtonGrid = document.getElementById("tileButtonGrid");
const counterButtonGrid = document.getElementById("counterButtonGrid");
const conditionButtonGrid = document.getElementById("conditionButtonGrid");

const stageBackgroundInput = document.getElementById("stageBackgroundInput");
const clearStageBackgroundBtn = document.getElementById("clearStageBackgroundBtn");
const boardDesignImage = document.getElementById("boardDesignImage");

const boardDesignInput = document.getElementById("boardDesignInput");
const clearBoardDesignBtn = document.getElementById("clearBoardDesignBtn");

const clearTileBtn = document.getElementById("clearTileBtn");
const clearCounterBtn = document.getElementById("clearCounterBtn");
const clearBoardBtn = document.getElementById("clearBoardBtn");
const undoBtn = document.getElementById("undoBtn");

const pieceButtons = Array.from(document.querySelectorAll(".piece-btn"));
const teamButtons = Array.from(document.querySelectorAll(".team-btn"));

const whiteTray = document.getElementById("whiteTray");
const blackTray = document.getElementById("blackTray");

const abilityDescriptionContent = document.getElementById("abilityDescriptionContent");

const standardSetupBtn = document.getElementById("standardSetupBtn");
const clearConditionBtn = document.getElementById("clearConditionBtn");

const tileDescriptionList = document.getElementById("tileDescriptionList");
const conditionDescriptionList = document.getElementById("conditionDescriptionList");

const abilityCsvInput = document.getElementById("abilityCsvInput");
const portraitImageInput = document.getElementById("portraitImageInput");
const portraitUploadStatus = document.getElementById("portraitUploadStatus");

const stageBackgroundImage = document.getElementById("stageBackgroundImage");

// ================================================================================
// CONSTANTS
// ================================================================================

const uploadConfig = [
  { id: "uploadWhiteKing", previewId: "previewWhiteKing", team: "white", piece: "king", label: "White King" },
  { id: "uploadBlackKing", previewId: "previewBlackKing", team: "black", piece: "king", label: "Black King" },
  { id: "uploadWhiteQueen", previewId: "previewWhiteQueen", team: "white", piece: "queen", label: "White Queen" },
  { id: "uploadBlackQueen", previewId: "previewBlackQueen", team: "black", piece: "queen", label: "Black Queen" },
  { id: "uploadWhiteBishop", previewId: "previewWhiteBishop", team: "white", piece: "bishop", label: "White Bishop" },
  { id: "uploadBlackBishop", previewId: "previewBlackBishop", team: "black", piece: "bishop", label: "Black Bishop" },
  { id: "uploadWhiteKnight", previewId: "previewWhiteKnight", team: "white", piece: "knight", label: "White Knight" },
  { id: "uploadBlackKnight", previewId: "previewBlackKnight", team: "black", piece: "knight", label: "Black Knight" },
  { id: "uploadWhiteRook", previewId: "previewWhiteRook", team: "white", piece: "rook", label: "White Rook" },
  { id: "uploadBlackRook", previewId: "previewBlackRook", team: "black", piece: "rook", label: "Black Rook" }
];

const TOOL_LABELS = {
  tile: "Paint Tile",
  clearTile: "Clear Tile",
  piece: "Place / Move Piece",
  mark: "Counter",
  clearMark: "Clear Counter",
  erase: "Erase Cell",
  condition: "Condition",
  "condition-clear": "Clear Condition",
  token: "Place Board Token"
};

const PIECE_TYPES = ["king", "queen", "bishop", "knight", "rook", "pawn"];

const PIECE_SYMBOLS = {
  white: {
    king: "♔",
    queen: "♕",
    rook: "♖",
    bishop: "♗",
    knight: "♘",
    pawn: "♙"
  },
  black: {
    king: "♚",
    queen: "♛",
    rook: "♜",
    bishop: "♝",
    knight: "♞",
    pawn: "♟"
  }
};

const DEFAULT_PIECE_IMAGES = {
  white: {
    king: "assets/pieces/standard/white-king.png",
    queen: "assets/pieces/standard/white-queen.png",
    bishop: "assets/pieces/standard/white-bishop.png",
    knight: "assets/pieces/standard/white-knight.png",
    rook: "assets/pieces/standard/white-rook.png",
    pawn: "assets/pieces/standard/white-pawn.png"
  },
  black: {
    king: "assets/pieces/standard/black-king.png",
    queen: "assets/pieces/standard/black-queen.png",
    bishop: "assets/pieces/standard/black-bishop.png",
    knight: "assets/pieces/standard/black-knight.png",
    rook: "assets/pieces/standard/black-rook.png",
    pawn: "assets/pieces/standard/black-pawn.png"
  }
};

const PIECE_MASKS = {
  king: "assets/king-mask.svg",
  queen: "assets/queen-mask.svg",
  bishop: "assets/bishop-mask.svg",
  knight: "assets/knight-mask.svg",
  rook: "assets/rook-mask.svg",
  pawn: "assets/pawn-mask.svg"
};

const SHOWCASE_PIECES = ["king", "queen", "bishop", "knight", "rook"];

const SHORTCUT_GROUPS = {
  terrains: {
    label: "Terrains",
    keys: ["Q", "W", "E", "R", "T", "Y"],
    buttonSelector: "#tileButtonGrid .tile-btn"
  },

  counters: {
    label: "Counters",
    keys: ["A", "S", "D", "F", "G", "H"],
    buttonSelector: "#counterButtonGrid .mark-color-btn"
  },

  conditions: {
    label: "Conditions",
    keys: ["Z", "X", "C", "V", "B", "N"],
    buttonSelector: "#conditionButtonGrid .condition-btn"
  }
};

const GENERAL_SHORTCUTS = [
  {
    keys: "Ctrl+Z",
    label: "Undo"
  },
  {
    keys: "Esc",
    label: "Clear selection"
  }
];

// ================================================================================
// STATE
// ================================================================================

const state = {
  rows: 8,
  cols: 8,
  selectedTool: "piece",
  selectedTile: "neutral",
  selectedPiece: "king",
  selectedTeam: "white",
  activeCharacterCard: null,
  abilityLibrary: {},
  uploadedPortraits: {},

  worldDetails: {
    name: "",
    description: "",
    rulesNotes: ""
  },

  selectedMarkColor: "neutral",
  selectedMarkValue: "-1",
  selectedCondition: null,
  selectedToken: null,
  movingPiece: null,
  currentTurn: "white",
  turnTimerSeconds: 0,
  timerInterval: null,
  clocks: {
    white: 0,
    black: 0
  },

  pieceImages: {
    white: {
      king: null,
      queen: null,
      bishop: null,
      knight: null,
      rook: null,
      pawn: null
    },
    black: {
      king: null,
      queen: null,
      bishop: null,
      knight: null,
      rook: null,
      pawn: null
    }
  },

  customPieceImages: {
    white: {
      king: null,
      queen: null,
      bishop: null,
      knight: null,
      rook: null,
      pawn: null
    },
    black: {
      king: null,
      queen: null,
      bishop: null,
      knight: null,
      rook: null,
      pawn: null
    }
  },

  hiddenPortraits: {
    white: {
      king: false,
      queen: false,
      bishop: false,
      knight: false,
      rook: false,
      pawn: false
    },
    black: {
      king: false,
      queen: false,
      bishop: false,
      knight: false,
      rook: false,
      pawn: false
    }
  },

  pieceNames: {
    white: {
      king: "",
      queen: "",
      bishop: "",
      knight: "",
      rook: ""
    },
    black: {
      king: "",
      queen: "",
      bishop: "",
      knight: "",
      rook: ""
    }
  },

  pieceNameLocked: {
    white: {
      king: false,
      queen: false,
      bishop: false,
      knight: false,
      rook: false
    },
    black: {
      king: false,
      queen: false,
      bishop: false,
      knight: false,
      rook: false
    }
  },

  cells: [],
  undoStack: []
};

// ================================================================================
// THEME DATA
// ================================================================================

let TILE_NAMES = ["neutral", "water", "fire", "forest", "sand", "stone"];

let CONDITIONS = {
  blinded: {
    symbol: "🚫",
    className: "condition-blinded",
    label: "Blinded",
    color: "#f8fafc",
    textColor: "#111827"
  },
  shielded: {
    symbol: "🛡️",
    className: "condition-shielded",
    label: "Shielded",
    color: "#facc15",
    textColor: "#111827"
  },
  poisoned: {
    symbol: "☠️",
    className: "condition-poisoned",
    label: "Poisoned",
    color: "#7e22ce",
    textColor: "#ffffff"
  },
  burning: {
    symbol: "🔥",
    className: "condition-burning",
    label: "Burning",
    color: "#dc2626",
    textColor: "#ffffff"
  }
};

let TILE_DESCRIPTIONS = {
  forest: "Dense terrain that can represent woods, vines, cover, or living ground.",
  water: "Difficult terrain shaped by rivers, floods, ice, or magical currents.",
  sand: "Unstable terrain shaped by dust, desert, ruins, or shifting ground.",
  fire: "Dangerous terrain affected by flame, heat, lava, or burning ground."
};

let CONDITION_DESCRIPTIONS = {
  blinded: "🚫 Blinded: This piece cannot capture.",
  shielded: "🛡️ Shielded: This piece cannot be captured.",
  poisoned: "☠️ Poisoned: This piece loses 1 HP at the end of the turn. It heals if it does not move.",
  burning: "🔥 Burning: This piece loses 1 HP at the end of the turn. It heals if it moves, or if a friendly piece moves adjacent to it."
};

let MARKERS = {
  white: {
    key: "white",
    label: "-1 White Counter",
    color: "#f8fafc",
    textColor: "#111827",
    value: "-1",
    description: "Add a -1 White counter to the piece."
  },
  white_plus: {
    key: "white_plus",
    label: "+1 White Counter",
    color: "#f8fafc",
    textColor: "#111827",
    value: "+1",
    description: "Add a +1 White counter to the piece."
  },
  black: {
    key: "black",
    label: "-1 Black Counter",
    color: "#020617",
    textColor: "#f8fafc",
    value: "-1",
    description: "Add a -1 Black counter to the piece."
  },
  black_plus: {
    key: "black_plus",
    label: "+1 Black Counter",
    color: "#020617",
    textColor: "#f8fafc",
    value: "+1",
    description: "Add a +1 Black counter to the piece."
  }
};

const GENERIC_TOKEN_SYMBOL = "✦";

let BOARD_TOKENS = {};

let THEME_TILES = {

  neutral: {
    key: "neutral",
    label: "Neutral",
    lightColor: "#b9bcc4",
    darkColor: "#7d838f",
    description: "A normal battlefield tile with no special effect."
  },

  forest: {
    key: "forest",
    label: "Forest",
    symbol: "",
    mode: "image",
    image: "assets/terrains/forest-tile.png",
    lightColor: "#5aa469",
    darkColor: "#3f7f50",
    description: "Dense terrain that can represent woods, vines, cover, or living ground."
  },

  water: {
    key: "water",
    label: "Water",
    symbol: "",
    mode: "image",
    image: "assets/terrains/water-tile.png",
    lightColor: "#63a7ff",
    darkColor: "#3f78c7",
    description: "Difficult terrain shaped by rivers, floods, ice, or magical currents."
  },

  sand: {
    key: "sand",
    label: "Sand",
    symbol: "",
    mode: "image",
    image: "assets/terrains/sand-tile.png",
    lightColor: "#d1a85b",
    darkColor: "#a67b35",
    description: "Unstable terrain shaped by dust, desert, ruins, or shifting ground."
  },

  fire: {
    key: "fire",
    label: "Fire",
    symbol: "",
    mode: "image",
    image: "assets/terrains/fire-tile.png",
    lightColor: "#ff8a5b",
    darkColor: "#c64a2f",
    description: "Dangerous terrain affected by flame, heat, lava, or burning ground."
  }
};

const DEFAULT_THEME_STYLES = {
  stageBackgroundImage: "assets/backgrounds/default-stage-background.png",
  boardDesignImage: "assets/boards/default-board-design.png",

  boardBorderColor: "#6b4f2a",
  boardBorderGlow: "rgba(120, 86, 40, 0.35)",
  boardShellBackground: "linear-gradient(145deg, #1a120c, #0b1020 35%, #15110e)"
};

let THEME_STYLES = { ...DEFAULT_THEME_STYLES };

const TERRAIN_COLOR_PALETTE = [
  { name: "Grey", color: "#7d838f" },
  { name: "Blue", color: "#3f78c7" },
  { name: "Red", color: "#c64a2f" },
  { name: "Green", color: "#3f7f50" },
  { name: "Yellow", color: "#d1a85b" },
  { name: "Orange", color: "#ea7a2f" },
  { name: "Purple", color: "#7e22ce" },
  { name: "Pink", color: "#db2777" },
  { name: "Cyan", color: "#0891b2" },
  { name: "Brown", color: "#7c4a18" },
  { name: "Black", color: "#1f2937" },
  { name: "White", color: "#d9dde5" }
];

const MARKER_COLOR_PALETTE = [
  { name: "White", color: "#f8fafc", textColor: "#111827" },
  { name: "Black", color: "#020617", textColor: "#f8fafc" },
  { name: "Blue", color: "#2563eb", textColor: "#ffffff" },
  { name: "Red", color: "#dc2626", textColor: "#ffffff" },
  { name: "Green", color: "#16a34a", textColor: "#ffffff" },
  { name: "Yellow", color: "#facc15", textColor: "#111827" },
  { name: "Purple", color: "#7e22ce", textColor: "#ffffff" },
  { name: "Orange", color: "#f97316", textColor: "#111827" },
  { name: "Grey", color: "#6b7280", textColor: "#ffffff" },
  { name: "Cyan", color: "#0891b2", textColor: "#ffffff" }
];

// ================================================================================
// HELPER FUNCTIONS
// ================================================================================

function getPrimaryTokenKey(cell) {
  if (!cell || !Array.isArray(cell.tokens) || cell.tokens.length === 0) {
    return null;
  }

  const tokenData = cell.tokens[0];

  return typeof tokenData === "string" ? tokenData : tokenData.key;
}

function clearCellOccupant(cell) {
  cell.pieceType = null;
  cell.team = null;
  cell.tokens = [];
}

function humanizeTokenKey(tokenKey) {
  if (!tokenKey) return "Token";

  return tokenKey
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function ensureBoardToken(tokenKey) {
  if (!tokenKey) return null;

  const cleanKey = tokenKey.trim();

  if (!cleanKey) return null;

  if (!BOARD_TOKENS[cleanKey]) {
    BOARD_TOKENS[cleanKey] = {
      key: cleanKey,
      label: humanizeTokenKey(cleanKey),
      symbol: GENERIC_TOKEN_SYMBOL,
      description: "",
      locked: false
    };
  }

  return BOARD_TOKENS[cleanKey];
}

function showSaveStatus(message, type = "neutral") {
  if (!saveStatusMessage) return;

  saveStatusMessage.textContent = message;
  saveStatusMessage.className = `save-status-message ${type}`;

  window.clearTimeout(showSaveStatus.timeoutId);

  showSaveStatus.timeoutId = window.setTimeout(() => {
    saveStatusMessage.textContent = "";
    saveStatusMessage.className = "save-status-message";
  }, 2500);
}

function syncWorldDetailsFromInputs() {
  if (!state.worldDetails) {
    state.worldDetails = {
      name: "",
      description: "",
      rulesNotes: ""
    };
  }

  if (worldNameInput) {
    state.worldDetails.name = worldNameInput.value.trim();

    if (presetNameInput && !presetNameInput.value.trim()) {
      presetNameInput.value = state.worldDetails.name;
    }
  }

  if (worldDescriptionInput) {
    state.worldDetails.description = worldDescriptionInput.value.trim();
  }

  if (worldRulesInput) {
    state.worldDetails.rulesNotes = worldRulesInput.value.trim();
  }
}

function syncWorldDetailsToInputs() {
  if (!state.worldDetails) return;

  if (worldNameInput) {
    worldNameInput.value = state.worldDetails.name || "";
  }

  if (worldDescriptionInput) {
    worldDescriptionInput.value = state.worldDetails.description || "";
  }

  updateWorldDescriptionCount();

  if (worldRulesInput) {
    worldRulesInput.value = state.worldDetails.rulesNotes || "";
  }
}

function updateWorldDescriptionCount() {
  if (!worldDescriptionInput || !worldDescriptionCount) return;

  const maxLength = Number(worldDescriptionInput.getAttribute("maxlength")) || 180;
  const currentLength = worldDescriptionInput.value.length;

  worldDescriptionCount.textContent = `${currentLength} / ${maxLength}`;
}

function cloneCells(cells) {
  return JSON.parse(JSON.stringify(cells));
}

function saveUndoState() {
  // Store the current board before changing it.
  state.undoStack.push(cloneCells(state.cells));

  // Limit history so memory does not grow forever.
  if (state.undoStack.length > 40) {
    state.undoStack.shift();
  }
}

function undoLastAction() {
  if (!state.undoStack || state.undoStack.length === 0) {
    return;
  }

  state.cells = state.undoStack.pop();
  state.movingPiece = null;

  renderBoard();
  updateReadouts();
}

function createEmptyCell() {
  return {
    tile: "neutral",
    pieceType: null,
    team: null,
    mark: "",
    markColor: "neutral",
    conditions: [],
    tokens: []
  };
}

function createBoardData() {
  return Array.from({ length: state.rows * state.cols }, () => createEmptyCell());
}

function getCellStyle(tileType, row, col) {
  /**
   * Returns the visual style for a board cell based on the selected terrain.
   * A terrain can use either colour mode or image mode.
   */
  const isLightSquare = (row + col) % 2 === 1;
  const tile = THEME_TILES[tileType] || THEME_TILES.neutral;

  if (!tile) {
    return {
      background: isLightSquare ? "var(--neutral-light)" : "var(--neutral-dark)"
    };
  }

  if (tile.mode === "image" && tile.image) {
    return {
      background: `url('${tile.image}') center / cover no-repeat`
    };
  }

  return {
    background: isLightSquare
      ? tile.lightColor || tile.color || "#b9bcc4"
      : tile.darkColor || tile.color || "#7d838f"
  };
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => button.classList.remove("active"));

  if (activeButton) {
    activeButton.classList.add("active");
  }
}

function clearEditorHighlights(keepArea = "") {
  // Clears terrain highlights unless we are currently choosing terrain.
  if (keepArea !== "terrain" && tileButtonGrid) {
    setActiveButton(Array.from(tileButtonGrid.querySelectorAll(".tile-btn")), null);

    if (clearTileBtn) {
      clearTileBtn.classList.remove("active");
    }
  }

  // Clears counter highlights unless we are currently choosing counters.
  if (keepArea !== "counter" && counterButtonGrid) {
    setActiveButton(Array.from(counterButtonGrid.querySelectorAll(".mark-color-btn")), null);

    if (clearCounterBtn) {
      clearCounterBtn.classList.remove("active");
    }
  }

  // Clears condition highlights unless we are currently choosing conditions.
  if (keepArea !== "condition" && conditionButtonGrid) {
    setActiveButton(Array.from(conditionButtonGrid.querySelectorAll(".condition-btn")), null);

    if (clearConditionBtn) {
      clearConditionBtn.classList.remove("active");
    }
  }
}

function returnToPieceTool() {
  state.selectedTool = "piece";

  const pieceToolButton = toolButtons.find((button) => button.dataset.tool === "piece");

  if (pieceToolButton) {
    setActiveButton(toolButtons, pieceToolButton);
  } else {
    setActiveButton(toolButtons, null);
  }

  updateReadouts();
}

function updateReadouts() {
  modeReadout.textContent = TOOL_LABELS[state.selectedTool] || "None";
  pieceReadout.textContent = capitalize(state.selectedPiece);
  teamReadout.textContent = capitalize(state.selectedTeam);
  turnReadout.textContent = capitalize(state.currentTurn);

  if (state.movingPiece) {
    if (state.movingPiece.kind === "token") {
      const token = ensureBoardToken(state.movingPiece.tokenKey);
      movingReadout.textContent = token ? token.label : "Board Token";
    } else {
      movingReadout.textContent = `${capitalize(state.movingPiece.team)} ${capitalize(state.movingPiece.pieceType)}`;
    }
  } else {
    movingReadout.textContent = "None";
  }

  if (state.turnTimerSeconds === 0) {
    whiteTimerReadout.textContent = "Off";
    blackTimerReadout.textContent = "Off";
  } else {
    whiteTimerReadout.textContent = formatTime(state.clocks.white);
    blackTimerReadout.textContent = formatTime(state.clocks.black);
  }
}

function clearLooseSelections() {
  let changed = false;

  if (state.activeCharacterCard) {
    state.activeCharacterCard = null;
    changed = true;
  }

  if (state.movingPiece) {
    state.movingPiece = null;
    changed = true;
  }

  if (changed) {
    renderBoard();
  }
}

function resetInterfaceSelection() {
  // No active tool after clicking empty space.
  state.selectedTool = null;

  // Clear temporary selections.
  state.selectedCondition = null;
  state.movingPiece = null;
  state.activeCharacterCard = null;

  // Clear tool highlights.
  setActiveButton(toolButtons, null);

  // Clear terrain / counter / condition highlights.
  clearEditorHighlights();

  updateReadouts();
  renderBoard();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getCounterNumber(markText) {
  const number = parseInt(markText, 10);
  return Number.isNaN(number) ? 0 : number;
}

function formatCounterNumber(number) {
  if (number > 0) return `+${number}`;
  if (number < 0) return `${number}`;
  return "";
}

function hexToRgb(hex) {
  /**
   * Converts a hex colour into RGB values so the code can lighten or darken it.
   */
  const cleanHex = hex.replace("#", "");

  const fullHex = cleanHex.length === 3
    ? cleanHex.split("").map((char) => char + char).join("")
    : cleanHex;

  const number = parseInt(fullHex, 16);

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255
  };
}

function rgbToHex(r, g, b) {
  /**
   * Converts RGB values back into a hex colour.
   */
  return "#" + [r, g, b]
    .map((value) => {
      const safeValue = Math.max(0, Math.min(255, Math.round(value)));
      return safeValue.toString(16).padStart(2, "0");
    })
    .join("");
}

function adjustColor(hex, amount) {
  /**
   * Creates a lighter or darker version of a colour.
   */
  const rgb = hexToRgb(hex);

  return rgbToHex(
    rgb.r + amount,
    rgb.g + amount,
    rgb.b + amount
  );
}

function showAbilityDescription(team, pieceType) {
  const characterName = state.pieceNames[team]?.[pieceType] || "";
  const matchedAbility = getAbilityForCharacter(characterName);

  if (!abilityDescriptionContent) return;

  if (!characterName) {
    abilityDescriptionContent.innerHTML = `
      <div class="ability-empty">
        No character assigned to ${capitalize(team)} ${capitalize(pieceType)}.
      </div>
    `;
    return;
  }

  if (!matchedAbility) {
    abilityDescriptionContent.innerHTML = `
      <div class="ability-title">${characterName}</div>
      <div class="ability-empty">No ability found in the uploaded CSV.</div>
    `;
    return;
  }

  abilityDescriptionContent.innerHTML = `
    <div class="ability-title">${matchedAbility.character}</div>
    <div class="ability-name">${matchedAbility.ability}</div>
    <div class="ability-text">${matchedAbility.description}</div>
    ${matchedAbility.cost ? `<div class="ability-cost">Cost: ${matchedAbility.cost}</div>` : ""}
  `;
}

function setTerrainBaseColor(tileKey, baseColor) {
  /**
   * Stores one chosen terrain colour and automatically creates light/dark board versions.
   */
  const tile = THEME_TILES[tileKey];

  if (!tile) return;

  tile.baseColor = baseColor;
  tile.lightColor = adjustColor(baseColor, 38);
  tile.darkColor = adjustColor(baseColor, -28);
}

function scaleGameStage() {
  const stage = document.getElementById("gameStage");

  if (!stage) return;

  const baseWidth = 1920;
  const baseHeight = 1080;

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY);

  stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

// ================================================================================
// RENDER FUNCTIONS
// ================================================================================

function renderTileDescriptions() {
  if (!tileDescriptionList) return;

  tileDescriptionList.innerHTML = "";

  TILE_NAMES.forEach((tileName) => {
    const item = document.createElement("div");
    item.className = "description-item";

    item.innerHTML = `
      <div class="description-title">${capitalize(tileName)}</div>
      <div class="description-text">${TILE_DESCRIPTIONS[tileName] || "No description yet."}</div>
    `;

    tileDescriptionList.appendChild(item);
  });
}

function renderConditionDescriptions() {
  if (!conditionDescriptionList) return;

  conditionDescriptionList.innerHTML = "";

  Object.keys(CONDITIONS).forEach((conditionName) => {
    const condition = CONDITIONS[conditionName];

    const item = document.createElement("div");
    item.className = "description-item";

    item.innerHTML = `
      <div class="description-title">${condition.symbol} ${capitalize(conditionName)}</div>
      <div class="description-text">${CONDITION_DESCRIPTIONS[conditionName] || "No description yet."}</div>
    `;

    conditionDescriptionList.appendChild(item);
  });
}

function renderThemeControls() {
  /**
   * Rebuilds the Tile, Counter, and Condition buttons from the current theme.
   * This is what allows Naruto / Avatar / One Piece / custom themes to use different options.
   */
  renderTileButtons();
  renderCounterButtons();
  renderConditionButtons();

  tileButtons = Array.from(document.querySelectorAll(".tile-btn"));
  markColorButtons = Array.from(document.querySelectorAll(".mark-color-btn"));
  conditionButtons = Array.from(document.querySelectorAll(".condition-btn"));

  bindThemeControlEvents();
}

function renderTileButtons() {
  /**
   * Creates terrain buttons from THEME_TILES.
   * Neutral is not shown because Clear Tile already handles that job.
   */
  if (!tileButtonGrid) return;

  tileButtonGrid.innerHTML = "";

  Object.values(THEME_TILES).forEach((tile) => {
    if (tile.key === "neutral") return;

    const button = document.createElement("button");
    button.className = "tile-btn compact-tool-btn";
    button.dataset.tile = tile.key;
    button.textContent = tile.symbol || "";

    const shortcutKeys = ["Q", "W", "E", "R", "T", "Y"];
    const buttonIndex = tileButtonGrid.children.length;
    const shortcutLabel = shortcutKeys[buttonIndex] ? `Shortcut: ${shortcutKeys[buttonIndex]}` : "";

    button.title = `${tile.label}\n${tile.description || ""}${shortcutLabel ? `\n${shortcutLabel}` : ""}`;

    if (shortcutKeys[buttonIndex]) {
      const shortcutBadge = document.createElement("span");
      shortcutBadge.className = "shortcut-badge";
      shortcutBadge.textContent = shortcutKeys[buttonIndex];
      button.appendChild(shortcutBadge);
    }

    button.setAttribute("aria-label", tile.label);

    if (tile.mode === "image" && tile.image) {
      button.style.background = `url('${tile.image}') center / cover no-repeat`;
      button.style.color = "#ffffff";
      button.style.textShadow = "0 1px 3px rgba(0,0,0,0.9)";
    } else {
      button.style.background = tile.darkColor || tile.color || "#4b5563";
      button.style.color = tile.textColor || "#ffffff";
    }

    tileButtonGrid.appendChild(button);
  });
}

function renderCounterButtons() {
  /**
   * Creates counter buttons from MARKERS.
   * Each counter has a value, colour, label, and timing meaning.
   */
  if (!counterButtonGrid) return;

  counterButtonGrid.innerHTML = "";

  Object.values(MARKERS).forEach((counter) => {
    const button = document.createElement("button");
    button.className = "mark-color-btn compact-tool-btn";
    button.dataset.markColor = counter.key;
    button.dataset.markValue = counter.value;
    button.textContent = counter.value;

    const shortcutKeys = ["A", "S", "D", "F", "G", "H"];
    const buttonIndex = counterButtonGrid.children.length;
    const shortcutLabel = shortcutKeys[buttonIndex] ? `Shortcut: ${shortcutKeys[buttonIndex]}` : "";

    button.title = `${counter.label}\n${counter.description || ""}${shortcutLabel ? `\n${shortcutLabel}` : ""}`;

    if (shortcutKeys[buttonIndex]) {
      const shortcutBadge = document.createElement("span");
      shortcutBadge.className = "shortcut-badge";
      shortcutBadge.textContent = shortcutKeys[buttonIndex];
      button.appendChild(shortcutBadge);
    }

    button.style.background = counter.color || "#4b5563";
    button.style.color = counter.textColor || "#ffffff";
    button.setAttribute("aria-label", counter.label);

    counterButtonGrid.appendChild(button);
  });
}

function renderConditionButtons() {
  /**
   * Creates condition buttons from CONDITIONS.
   * Each condition can have its own label, symbol, colours, and description.
   */
  if (!conditionButtonGrid) return;

  conditionButtonGrid.innerHTML = "";

  Object.entries(CONDITIONS).forEach(([conditionKey, condition]) => {
    const button = document.createElement("button");
    button.className = "condition-btn compact-tool-btn";
    button.dataset.condition = conditionKey;
    button.textContent = condition.symbol || condition.label.slice(0, 2);

    const shortcutKeys = ["Z", "X", "C", "V", "B", "N"];
    const buttonIndex = conditionButtonGrid.children.length;
    const shortcutLabel = shortcutKeys[buttonIndex] ? `Shortcut: ${shortcutKeys[buttonIndex]}` : "";

    button.title = `${condition.label}\n${CONDITION_DESCRIPTIONS[conditionKey] || ""}${shortcutLabel ? `\n${shortcutLabel}` : ""}`;

    if (shortcutKeys[buttonIndex]) {
      const shortcutBadge = document.createElement("span");
      shortcutBadge.className = "shortcut-badge";
      shortcutBadge.textContent = shortcutKeys[buttonIndex];
      button.appendChild(shortcutBadge);
    }

    button.style.background = condition.color || "#4b5563";
    button.style.color = condition.textColor || "#ffffff";
    button.setAttribute("aria-label", condition.label);

    conditionButtonGrid.appendChild(button);
  });
}

function renderTerrainEditor() {
  /**
   * Builds the Terrain Editor.
   * Each terrain can use either colour mode or image mode.
   * Pressing OK updates the terrain option, then it becomes available in the terrain buttons.
   */
  if (!terrainEditorList) return;

  terrainEditorList.innerHTML = "";

  Object.values(THEME_TILES).forEach((tile) => {
    if (tile.key === "neutral") return;

    const currentBaseColor = tile.baseColor || tile.darkColor || tile.color || "#7d838f";

    let draftBaseColor = currentBaseColor;
    let draftMode = tile.mode || "color";
    let draftImage = tile.image || null;

    const card = document.createElement("div");
    card.className = "terrain-editor-card";

    const header = document.createElement("div");
    header.className = "terrain-editor-header";

    const title = document.createElement("div");
    title.className = "terrain-editor-title";
    title.textContent = tile.label || tile.key;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "terrain-delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      delete THEME_TILES[tile.key];
      delete TILE_DESCRIPTIONS[tile.key];

      state.cells.forEach((cell) => {
        if (cell.tile === tile.key) {
          cell.tile = "neutral";
        }
      });

      refreshThemeAfterEditorChange();
    });

    header.appendChild(title);
    header.appendChild(deleteBtn);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = tile.label || tile.key;
    nameInput.placeholder = "Terrain name";

    const modeSelect = document.createElement("select");
    modeSelect.innerHTML = `
      <option value="color">Colour</option>
      <option value="image">Image</option>
    `;
    modeSelect.value = draftMode;

    const palette = document.createElement("div");
    palette.className = "color-palette";

    TERRAIN_COLOR_PALETTE.forEach((paletteColor) => {
      const swatch = document.createElement("button");
      swatch.className = "color-swatch";
      swatch.title = paletteColor.name;
      swatch.style.background = paletteColor.color;

      if (draftBaseColor.toLowerCase() === paletteColor.color.toLowerCase()) {
        swatch.classList.add("active");
      }

      swatch.addEventListener("click", () => {
        draftBaseColor = paletteColor.color;

        Array.from(palette.children).forEach((button) => {
          button.classList.remove("active");
        });

        swatch.classList.add("active");
      });

      palette.appendChild(swatch);
    });

    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.accept = "image/*";

    const imagePreview = document.createElement("div");
    imagePreview.className = "terrain-image-preview";

    const updateImagePreview = () => {
      if (draftImage) {
        imagePreview.style.background = `url('${draftImage}') center / cover no-repeat`;
        imagePreview.textContent = "";
      } else {
        imagePreview.style.background = "rgba(255,255,255,0.05)";
        imagePreview.textContent = "No image";
      }
    };

    updateImagePreview();

    imageInput.addEventListener("change", () => {
      const file = imageInput.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = (event) => {
        draftImage = event.target.result;
        updateImagePreview();
      };

      reader.readAsDataURL(file);
    });

    const removeImageBtn = document.createElement("button");
    removeImageBtn.textContent = "Remove Image";

    removeImageBtn.addEventListener("click", () => {
      draftImage = null;
      imageInput.value = "";
      updateImagePreview();
    });

    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = TILE_DESCRIPTIONS[tile.key] || tile.description || "";
    descriptionInput.placeholder = "Terrain description";

    const okBtn = document.createElement("button");
    okBtn.className = "mini-action-btn ok";
    okBtn.textContent = "OK";

    okBtn.addEventListener("click", () => {
      tile.label = nameInput.value.trim() || tile.key;
      tile.description = descriptionInput.value.trim();
      TILE_DESCRIPTIONS[tile.key] = tile.description;

      tile.mode = modeSelect.value;
      tile.image = draftImage;

      setTerrainBaseColor(tile.key, draftBaseColor);

      refreshThemeAfterEditorChange();
    });

    card.appendChild(header);
    card.appendChild(nameInput);
    card.appendChild(modeSelect);
    card.appendChild(palette);
    card.appendChild(imageInput);
    card.appendChild(imagePreview);
    card.appendChild(removeImageBtn);
    card.appendChild(descriptionInput);
    card.appendChild(okBtn);

    terrainEditorList.appendChild(card);
  });
}

function renderCounterEditor() {
  /**
   * Builds the Counter Editor from MARKERS.
   * Pressing OK updates the counter option, then that option becomes available as a counter button.
   */
  if (!counterEditorList) return;

  counterEditorList.innerHTML = "";

  Object.values(MARKERS).forEach((counter) => {
    let draftColor = counter.color || "#4b5563";
    let draftTextColor = counter.textColor || "#ffffff";

    const card = document.createElement("div");
    card.className = "counter-editor-card";

    const header = document.createElement("div");
    header.className = "terrain-editor-header";

    const title = document.createElement("div");
    title.className = "terrain-editor-title";
    title.textContent = counter.label || counter.key;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "terrain-delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      delete MARKERS[counter.key];

      state.cells.forEach((cell) => {
        if (cell.markColor === counter.key) {
          cell.mark = "";
          cell.markColor = "neutral";
        }
      });

      refreshThemeAfterEditorChange();
    });

    header.appendChild(title);
    header.appendChild(deleteBtn);

    const labelInput = document.createElement("input");
    labelInput.type = "text";
    labelInput.value = counter.label || counter.key;
    labelInput.placeholder = "Counter label";

    const valueSelect = document.createElement("select");
    valueSelect.innerHTML = `
      <option value="-1">-1</option>
      <option value="+1">+1</option>
      <option value="-2">-2</option>
      <option value="+2">+2</option>
      <option value="-3">-3</option>
      <option value="+3">+3</option>
    `;
    valueSelect.value = counter.value || "-1";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = counter.description || "";
    descriptionInput.placeholder = "Counter description";

    const palette = document.createElement("div");
    palette.className = "color-palette";

    MARKER_COLOR_PALETTE.forEach((paletteColor) => {
      const swatch = document.createElement("button");
      swatch.className = "color-swatch";
      swatch.title = paletteColor.name;
      swatch.style.background = paletteColor.color;

      if (draftColor.toLowerCase() === paletteColor.color.toLowerCase()) {
        swatch.classList.add("active");
      }

      swatch.addEventListener("click", () => {
        draftColor = paletteColor.color;
        draftTextColor = paletteColor.textColor;

        Array.from(palette.children).forEach((button) => {
          button.classList.remove("active");
        });

        swatch.classList.add("active");
      });

      palette.appendChild(swatch);
    });

    const okBtn = document.createElement("button");
    okBtn.className = "mini-action-btn ok";
    okBtn.textContent = "OK";

    okBtn.addEventListener("click", () => {
      counter.label = labelInput.value.trim() || counter.key;
      counter.value = valueSelect.value;
      counter.color = draftColor;
      counter.textColor = draftTextColor;
      counter.description = descriptionInput.value.trim();

      refreshThemeAfterEditorChange();
    });

    card.appendChild(header);
    card.appendChild(labelInput);
    card.appendChild(valueSelect);
    card.appendChild(palette);
    card.appendChild(descriptionInput);
    card.appendChild(okBtn);

    counterEditorList.appendChild(card);
  });
}

function renderConditionEditor() {
  /**
   * Builds the Condition Editor from CONDITIONS.
   * Users can edit the condition name, icon/emoji/text, and description.
   */
  if (!conditionEditorList) return;

  conditionEditorList.innerHTML = "";

  Object.entries(CONDITIONS).forEach(([conditionKey, condition]) => {
    const card = document.createElement("div");
    card.className = "condition-editor-card";

    const header = document.createElement("div");
    header.className = "terrain-editor-header";

    const title = document.createElement("div");
    title.className = "terrain-editor-title";
    title.textContent = condition.label || conditionKey;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "terrain-delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      delete CONDITIONS[conditionKey];
      delete CONDITION_DESCRIPTIONS[conditionKey];

      state.cells.forEach((cell) => {
        cell.conditions = (cell.conditions || []).filter((name) => name !== conditionKey);
      });

      refreshThemeAfterEditorChange();
    });

    header.appendChild(title);
    header.appendChild(deleteBtn);

    const labelInput = document.createElement("input");
    labelInput.type = "text";
    labelInput.value = condition.label || conditionKey;
    labelInput.placeholder = "Condition name";

    const symbolInput = document.createElement("input");
    symbolInput.type = "text";
    symbolInput.value = condition.symbol || "";
    symbolInput.placeholder = "Emoji or short text, e.g. 🔥 or STUN";
    symbolInput.maxLength = 8;

    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = CONDITION_DESCRIPTIONS[conditionKey] || "";
    descriptionInput.placeholder = "Condition description";

    const okBtn = document.createElement("button");
    okBtn.className = "mini-action-btn ok";
    okBtn.textContent = "OK";

    okBtn.addEventListener("click", () => {
      condition.label = labelInput.value.trim() || conditionKey;
      condition.symbol = symbolInput.value.trim() || "•";
      condition.className = `condition-${conditionKey}`;

      CONDITION_DESCRIPTIONS[conditionKey] = descriptionInput.value.trim();

      refreshThemeAfterEditorChange();
    });

    card.appendChild(header);
    card.appendChild(labelInput);
    card.appendChild(symbolInput);
    card.appendChild(descriptionInput);
    card.appendChild(okBtn);

    conditionEditorList.appendChild(card);
  });
}

function renderShortcutHelpPanel() {
  if (!shortcutHelpPanel) return;

  shortcutHelpPanel.innerHTML = "";

  const title = document.createElement("div");
  title.className = "shortcut-help-title";
  title.textContent = "Keyboard Shortcuts";

  shortcutHelpPanel.appendChild(title);

  Object.values(SHORTCUT_GROUPS).forEach((group) => {
    const row = document.createElement("div");
    row.className = "shortcut-help-row";

    const keys = document.createElement("span");
    keys.className = "shortcut-help-keys";
    keys.textContent = group.keys.join(" ");

    const label = document.createElement("span");
    label.textContent = group.label;

    row.appendChild(keys);
    row.appendChild(label);

    shortcutHelpPanel.appendChild(row);
  });

  GENERAL_SHORTCUTS.forEach((shortcut) => {
    const row = document.createElement("div");
    row.className = "shortcut-help-row";

    const keys = document.createElement("span");
    keys.className = "shortcut-help-keys";
    keys.textContent = shortcut.keys;

    const label = document.createElement("span");
    label.textContent = shortcut.label;

    row.appendChild(keys);
    row.appendChild(label);

    shortcutHelpPanel.appendChild(row);
  });
}

function refreshThemeAfterEditorChange() {
  /**
   * Refreshes every part of the UI that depends on theme data.
   */
  TILE_NAMES = Object.keys(THEME_TILES);

  renderThemeControls();
  renderTileDescriptions();
  renderConditionDescriptions();
  renderTerrainEditor();
  renderCounterEditor();
  renderConditionEditor();
  renderBoard();
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function startClock() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  if (state.turnTimerSeconds === 0) {
    updateReadouts();
    return;
  }

  state.timerInterval = setInterval(() => {
    const current = state.currentTurn;
    state.clocks[current]--;

    if (state.clocks[current] <= 0) {
      state.clocks[current] = 0;
      passTurn();
    }

    updateReadouts();
  }, 1000);

  updateReadouts();
}

function initializeClocks(secondsPerPlayer) {
  state.turnTimerSeconds = secondsPerPlayer;

  if (secondsPerPlayer === 0) {
    state.clocks.white = 0;
    state.clocks.black = 0;
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    updateReadouts();
    return;
  }

  state.clocks.white = secondsPerPlayer;
  state.clocks.black = secondsPerPlayer;
  startClock();
}

function passTurn() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  state.currentTurn = state.currentTurn === "white" ? "black" : "white";
  state.movingPiece = null;

  if (state.turnTimerSeconds > 0) {
    startClock();
  } else {
    updateReadouts();
  }
}

function renderUploadPreview(previewEl, label, imageSrc) {
  if (!imageSrc) {
    previewEl.innerHTML = `<span>No image uploaded</span>`;
    return;
  }

  previewEl.innerHTML = `
    <img src="${imageSrc}" alt="${label}">
    <span>${label} uploaded</span>
  `;
}

function setupUploads() {
  uploadConfig.forEach((item) => {
    const input = document.getElementById(item.id);
    const preview = document.getElementById(item.previewId);

    if (!input || !preview) {
      console.warn("Missing upload field or preview:", item.id, item.previewId);
      return;
    }

    renderUploadPreview(preview, item.label, state.pieceImages[item.team][item.piece]);

    input.addEventListener("change", function () {
      const file = input.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        state.pieceImages[item.team][item.piece] = event.target.result;
        renderUploadPreview(preview, item.label, event.target.result);
        renderBoard();
      };
      reader.readAsDataURL(file);
    });
  });
}

function getBoardPieceImage(team, pieceType) {
  const customPieceImage =
    state.customPieceImages?.[team]?.[pieceType] || null;

  const defaultPieceImage =
    DEFAULT_PIECE_IMAGES?.[team]?.[pieceType] || null;

  return customPieceImage || defaultPieceImage || null;
}

function getDisplayPortraitForPiece(team, pieceType) {
  // If the player intentionally cleared this portrait, show the normal chess piece.
  if (state.hiddenPortraits?.[team]?.[pieceType]) {
    return null;
  }

  const assignedName = state.pieceNames[team]?.[pieceType] || "";

  // Manual portrait upload has priority.
  const manualPortrait = state.pieceImages[team]?.[pieceType] || null;

  if (manualPortrait) {
    return manualPortrait;
  }

  // Otherwise try CSV / uploaded portrait batch.
  return getPortraitForCharacter(assignedName);
}

function renderPieceContent(cellData) {
  // If the cell has no piece, render nothing.
  if (!cellData.pieceType || !cellData.team) return "";

  const teamClass = cellData.team === "black" ? "team-black" : "team-white";
  const pieceType = cellData.pieceType;
  const symbol = PIECE_SYMBOLS[cellData.team]?.[pieceType] || "?";

  // This is the designed chess piece image:
  // custom uploaded piece image first, otherwise the standard RPG Chess piece image.
  const boardPieceImage = getBoardPieceImage(cellData.team, pieceType);

  // This is the character assigned to that team/piece.
  const assignedName = state.pieceNames[cellData.team]?.[pieceType] || "";

  const portraitImage = getDisplayPortraitForPiece(cellData.team, pieceType);

  // If a portrait exists, show the portrait token on the board.
  // The small badge underneath still uses the designed chess piece image.
  if (portraitImage) {
    const badgeContent = boardPieceImage
      ? `<img class="token-symbol-image" src="${boardPieceImage}" alt="${cellData.team} ${pieceType}">`
      : `<span class="token-symbol-text">${symbol}</span>`;

    return `
      <div class="cell-piece token-piece ${teamClass}">
        <div
          class="token-portrait"
          style="--piece-image: url('${portraitImage}')"
        ></div>

        <div class="token-symbol">
          ${badgeContent}
        </div>
      </div>
    `;
  }

  // If no portrait exists, show the designed chess piece directly.
  if (boardPieceImage) {
    return `
      <div class="cell-piece board-piece ${teamClass}">
        <img
          class="board-piece-image"
          src="${boardPieceImage}"
          alt="${cellData.team} ${pieceType}"
        >
      </div>
    `;
  }

  // Emergency fallback.
  return `<div class="cell-piece fallback-piece ${teamClass}">${symbol}</div>`;
}

function renderConditionMarks(cellData) {
  const conditions = cellData.conditions || [];

  if (conditions.length === 0) return "";

  return `
    <div class="condition-stack">
      ${conditions.map((conditionName) => {
    const condition = CONDITIONS[conditionName];
    if (!condition) return "";

    return `<span class="condition-mark ${condition.className}">${condition.symbol}</span>`;
  }).join("")}
    </div>
  `;
}

function renderMarker(cellData) {
  if (!cellData.mark) return "";

  const marker = MARKERS[cellData.markColor];

  const background = marker?.color || "#4b5563";
  const color = marker?.textColor || "#ffffff";

  return `
    <div
      class="corner-mark"
      style="background: ${background}; color: ${color};"
    >
      ${cellData.mark}
    </div>
  `;
}

function renderBoardTokens(cellData) {
  const tokens = cellData.tokens || [];

  if (tokens.length === 0) return "";

  return `
    <div class="board-token-stack">
      ${tokens.map((tokenData) => {
    const tokenKey = typeof tokenData === "string" ? tokenData : tokenData.key;
    const token = ensureBoardToken(tokenKey);

    if (!token) return "";

    return `
          <span class="board-token-mark" title="${token.label}">
            <span class="board-token-symbol">${GENERIC_TOKEN_SYMBOL}</span>
            <span class="board-token-label">${token.label}</span>
          </span>
        `;
  }).join("")}
    </div>
  `;
}

function renderCounter(cellData) {
  /**
   * Renders the counter on a cell using colours from the current Theme Spreadsheet.
   * The counter number still comes from gameplay/editor clicks.
   */
  if (!cellData.mark) return "";

  const counter = MARKERS[cellData.markColor];

  const background = counter?.color || "#4b5563";
  const color = counter?.textColor || "#ffffff";

  return `
    <div
      class="corner-mark"
      style="background: ${background}; color: ${color};"
    >
      ${cellData.mark}
    </div>
  `;
}

function renderBoard() {
  boardEl.innerHTML = "";
  boardEl.style.gridTemplateColumns = `repeat(${state.cols}, var(--cell-width))`;

  state.cells.forEach((cellData, index) => {
    const cell = document.createElement("div");
    cell.className = "cell";

    if (cellData.tile !== "neutral") {
      cell.classList.add("terrain-painted");
    }

    const row = Math.floor(index / state.cols);
    const col = index % state.cols;
    const fileLetter = String.fromCharCode(65 + col); // A-H
    const rankNumber = state.rows - row;              // 8 to 1 from top to bottom

    const cellStyle = getCellStyle(cellData.tile, row, col);

    if (cellData.tile !== "neutral") {
      const neutralStyle = getCellStyle("neutral", row, col);

      // The cell keeps a normal board colour underneath.
      cell.style.background = neutralStyle.background || "";

      // The terrain image/colour is stored as a CSS variable.
      // CSS will draw it on a separate faded layer.
      cell.style.setProperty("--terrain-bg", cellStyle.background || "transparent");
    } else {
      cell.style.background = cellStyle.background || "";
      cell.style.removeProperty("--terrain-bg");
    }

    if (state.movingPiece && state.movingPiece.fromIndex === index) {
      cell.classList.add("selected-moving");
    }

    cell.innerHTML = `
  ${renderPieceContent(cellData)}
  ${renderBoardTokens(cellData)}
  ${renderMarker(cellData)}
  ${renderConditionMarks(cellData)}
  <div class="coords">${fileLetter}${rankNumber}</div>
`;

    cell.addEventListener("click", () => {
      handleCellClick(index);
    });

    boardEl.appendChild(cell);
  });

  renderTeamTray("black", blackTray);
  renderTeamTray("white", whiteTray);
  renderCharacterCard();
  updateReadouts();
}

if (stageBackgroundInput) {
  stageBackgroundInput.addEventListener("change", () => {
    const file = stageBackgroundInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      THEME_STYLES.stageBackgroundImage = event.target.result;

      applyThemeStyles();
      renderBoard();
    };

    reader.readAsDataURL(file);
  });
}

if (clearStageBackgroundBtn) {
  clearStageBackgroundBtn.addEventListener("click", () => {
    THEME_STYLES.stageBackgroundImage = DEFAULT_THEME_STYLES.stageBackgroundImage;

    if (stageBackgroundInput) {
      stageBackgroundInput.value = "";
    }

    applyThemeStyles();
    renderBoard();
  });
}

if (boardDesignInput) {
  boardDesignInput.addEventListener("change", () => {
    const file = boardDesignInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      THEME_STYLES.boardDesignImage = event.target.result;

      applyThemeStyles();
      renderBoard();
    };

    reader.readAsDataURL(file);
  });
}

if (clearBoardDesignBtn) {
  clearBoardDesignBtn.addEventListener("click", () => {
    THEME_STYLES.boardDesignImage = DEFAULT_THEME_STYLES.boardDesignImage;

    if (boardDesignInput) {
      boardDesignInput.value = "";
    }

    applyThemeStyles();
    renderBoard();
  });
}

function handleCellClick(index) {
  if (state.selectedTool === "tile") {
    saveUndoState();
    state.cells[index].tile = state.selectedTile;
    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "clearTile") {
    saveUndoState();
    state.cells[index].tile = "neutral";
    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "mark") {
    saveUndoState();
    const cell = state.cells[index];

    const currentValue = getCounterNumber(cell.mark);
    const changeValue = getCounterNumber(state.selectedMarkValue);
    const newValue = currentValue + changeValue;

    // If HP goes below -3, the piece is defeated.
    if (newValue < -3) {
      clearCellOccupant(cell);
      cell.mark = "";
      cell.markColor = "neutral";
      cell.conditions = [];

      if (state.movingPiece && state.movingPiece.fromIndex === index) {
        state.movingPiece = null;
      }

      returnToPieceTool();
      renderBoard();
      return;
    }

    if (newValue === 0) {
      cell.mark = "";
      cell.markColor = "neutral";
    } else {
      cell.mark = formatCounterNumber(newValue);
      cell.markColor = state.selectedMarkColor;
    }

    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "clearMark") {
    saveUndoState();
    state.cells[index].mark = "";
    state.cells[index].markColor = "neutral";
    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "erase") {
    saveUndoState();
    state.cells[index] = createEmptyCell();
    if (state.movingPiece && state.movingPiece.fromIndex === index) {
      state.movingPiece = null;
    }
    renderBoard();
    return;
  }

  if (state.selectedTool === "condition") {
    saveUndoState();
    const cell = state.cells[index];

    if (!cell.conditions) {
      cell.conditions = [];
    }

    if (!cell.conditions.includes(state.selectedCondition)) {
      cell.conditions.push(state.selectedCondition);
    }

    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "condition-clear") {
    saveUndoState();
    state.cells[index].conditions = [];
    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "token") {
    saveUndoState();

    const cell = state.cells[index];

    if (state.selectedToken) {
      // Board tokens behave like pieces, so they occupy the whole cell.
      clearCellOccupant(cell);
      cell.tokens = [state.selectedToken];
      cell.conditions = cell.conditions || [];
    }

    returnToPieceTool();
    renderBoard();
    return;
  }

  if (state.selectedTool === "piece") {
    saveUndoState();
    handlePieceModeClick(index);
    renderBoard();
  }
}

function handlePieceModeClick(index) {
  /**
   * Handles placing, selecting, switching selected pieces/tokens, moving, and capturing.
   * Board tokens are treated as board occupants, like pieces.
   */
  const cell = state.cells[index];
  const tokenKey = getPrimaryTokenKey(cell);

  // Nothing is currently picked up.
  if (!state.movingPiece) {
    // Pick up a normal chess piece.
    if (cell.pieceType) {
      state.movingPiece = {
        kind: "piece",
        pieceType: cell.pieceType,
        team: cell.team,
        mark: cell.mark,
        markColor: cell.markColor,
        conditions: [...(cell.conditions || [])],
        fromIndex: index
      };
      return;
    }

    // Pick up a board token.
    if (tokenKey) {
      state.movingPiece = {
        kind: "token",
        tokenKey,
        mark: cell.mark,
        markColor: cell.markColor,
        conditions: [...(cell.conditions || [])],
        fromIndex: index
      };
      return;
    }

    // Empty cell: place the currently selected chess piece.
    cell.pieceType = state.selectedPiece;
    cell.team = state.selectedTeam;
    cell.tokens = [];
    cell.conditions = cell.conditions || [];
    return;
  }

  const fromIndex = state.movingPiece.fromIndex;

  // Clicking the same origin cell cancels the pickup.
  if (fromIndex === index) {
    state.movingPiece = null;
    return;
  }

  // If a token is picked up, move it like a piece.
  if (state.movingPiece.kind === "token") {
    // If clicking another token, switch pickup to that token.
    // This behaves like clicking another friendly piece in the old system.
    if (tokenKey) {
      state.movingPiece = {
        kind: "token",
        tokenKey,
        mark: cell.mark,
        markColor: cell.markColor,
        conditions: [...(cell.conditions || [])],
        fromIndex: index
      };
      return;
    }

    // Move token to target cell. It replaces any piece on that cell.
    clearCellOccupant(cell);
    cell.tokens = [state.movingPiece.tokenKey];
    cell.mark = state.movingPiece.mark;
    cell.markColor = state.movingPiece.markColor;
    cell.conditions = [...(state.movingPiece.conditions || [])];

    // Clear source cell.
    state.cells[fromIndex].pieceType = null;
    state.cells[fromIndex].team = null;
    state.cells[fromIndex].tokens = [];
    state.cells[fromIndex].mark = "";
    state.cells[fromIndex].markColor = "neutral";
    state.cells[fromIndex].conditions = [];

    state.movingPiece = null;
    return;
  }

  // If a normal piece is picked up:
  const movingTeam = state.movingPiece.team;

  // Clicking another friendly piece switches pickup to that piece.
  if (cell.pieceType && cell.team === movingTeam) {
    state.movingPiece = {
      kind: "piece",
      pieceType: cell.pieceType,
      team: cell.team,
      mark: cell.mark,
      markColor: cell.markColor,
      conditions: [...(cell.conditions || [])],
      fromIndex: index
    };
    return;
  }

  // Move piece to target cell. It replaces enemy pieces or board tokens.
  cell.pieceType = state.movingPiece.pieceType;
  cell.team = state.movingPiece.team;
  cell.tokens = [];
  cell.mark = state.movingPiece.mark;
  cell.markColor = state.movingPiece.markColor;
  cell.conditions = [...(state.movingPiece.conditions || [])];

  // Clear source cell.
  state.cells[fromIndex].pieceType = null;
  state.cells[fromIndex].team = null;
  state.cells[fromIndex].tokens = [];
  state.cells[fromIndex].mark = "";
  state.cells[fromIndex].markColor = "neutral";
  state.cells[fromIndex].conditions = [];

  state.movingPiece = null;
}

function exportBoard() {
  jsonBox.value = JSON.stringify(getSaveData(), null, 2);
  alert("JSON exported as backup.");
}

function importBoard() {
  try {
    const data = JSON.parse(jsonBox.value);
    applySaveData(data);
    alert("JSON imported.");
  } catch (error) {
    alert("Could not import board JSON. Check the format and try again.");
  }
}

function selectPieceForPlacement(team, pieceType) {
  const pieceToolButton = toolButtons.find((button) => button.dataset.tool === "piece");
  const matchingPieceButton = pieceButtons.find((button) => button.dataset.piece === pieceType);
  const matchingTeamButton = teamButtons.find((button) => button.dataset.team === team);

  state.selectedTeam = team;
  state.selectedPiece = pieceType;
  state.selectedTool = "piece";

  if (pieceToolButton) setActiveButton(toolButtons, pieceToolButton);
  if (matchingPieceButton) setActiveButton(pieceButtons, matchingPieceButton);
  if (matchingTeamButton) setActiveButton(teamButtons, matchingTeamButton);

  updateReadouts();
}

function renderCharacterCard() {
  const cardEl = document.getElementById("abilityDescriptionContent");
  if (!cardEl) return;

  if (!state.activeCharacterCard) {
    cardEl.innerHTML = `
      <div class="ability-empty">
        Click a portrait to edit/view a character.
      </div>
    `;
    return;
  }

  const { team, pieceType } = state.activeCharacterCard;
  const pieceName = state.pieceNames[team][pieceType];
  const isLocked = state.pieceNameLocked[team][pieceType];

  const portraitCandidates = getPortraitCandidates(pieceName);
  const imageSrc = getDisplayPortraitForPiece(team, pieceType);
  const matchedAbility = getAbilityForCharacter(pieceName);
  const symbol = PIECE_SYMBOLS[team][pieceType];

  cardEl.innerHTML = "";

  const card = document.createElement("div");
  card.className = "character-card-content";

  const clearPortraitBtn = document.createElement("button");
  clearPortraitBtn.className = "character-clear-portrait-btn";
  clearPortraitBtn.type = "button";
  clearPortraitBtn.title = "Clear portrait and show normal chess piece";
  clearPortraitBtn.textContent = "×";

  clearPortraitBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    state.pieceImages[team][pieceType] = null;
    state.hiddenPortraits[team][pieceType] = true;

    renderBoard();
  });

  const topRow = document.createElement("div");
  topRow.className = "character-card-top";

  const portraitBox = document.createElement("button");
  portraitBox.className = "character-card-portrait";
  portraitBox.title = imageSrc
    ? "Click or drop an image to change portrait"
    : "Click or drop an image to upload portrait";

  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `${team} ${pieceType}`;

    if (!state.pieceImages[team][pieceType] && portraitCandidates.length > 1) {
      let portraitIndex = 0;

      img.onerror = function () {
        portraitIndex++;

        if (portraitIndex < portraitCandidates.length) {
          img.src = portraitCandidates[portraitIndex];
        }
      };
    }

    portraitBox.appendChild(img);
  } else {
    portraitBox.innerHTML = `
    <span class="portrait-fallback-symbol">${symbol}</span>
    <span class="portrait-upload-hint">Upload</span>
  `;
  }

  if (imageSrc) {
    portraitBox.appendChild(clearPortraitBtn);
  }

  portraitBox.addEventListener("click", () => {
    uploadInput.click();
  });

  portraitBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    portraitBox.classList.add("drag-over");
  });

  portraitBox.addEventListener("dragleave", () => {
    portraitBox.classList.remove("drag-over");
  });

  portraitBox.addEventListener("drop", (event) => {
    event.preventDefault();
    portraitBox.classList.remove("drag-over");

    const file = event.dataTransfer.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      state.pieceImages[team][pieceType] = event.target.result;
      state.hiddenPortraits[team][pieceType] = false;
      renderBoard();
    };

    reader.readAsDataURL(file);
  });

  const infoArea = document.createElement("div");
  infoArea.className = "character-card-info";

  const pieceLabel = document.createElement("div");
  pieceLabel.className = "character-card-piece-label";
  pieceLabel.textContent = `${capitalize(team)} ${capitalize(pieceType)}`;

  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/*";
  uploadInput.hidden = true;

  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      state.pieceImages[team][pieceType] = event.target.result;
      state.hiddenPortraits[team][pieceType] = false;
      renderBoard();
    };

    reader.readAsDataURL(file);
  });

  infoArea.appendChild(pieceLabel);

  if (isLocked) {
    const nameLine = document.createElement("button");
    nameLine.className = "character-card-name character-card-name-button";
    nameLine.textContent = pieceName || "Unnamed";
    nameLine.title = "Click to edit name";

    nameLine.addEventListener("click", () => {
      state.pieceNameLocked[team][pieceType] = false;
      renderBoard();
    });

    infoArea.appendChild(nameLine);
  } else {
    const nameInput = document.createElement("input");
    nameInput.className = "character-name-input";
    nameInput.type = "text";
    nameInput.placeholder = "Character name";
    nameInput.value = pieceName;

    nameInput.addEventListener("input", () => {
      state.pieceNames[team][pieceType] = nameInput.value;
    });

    nameInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;

      state.pieceNames[team][pieceType] = nameInput.value.trim();
      state.pieceNameLocked[team][pieceType] = true;
      renderBoard();
    });

    const okBtn = document.createElement("button");
    okBtn.className = "character-ok-btn";
    okBtn.textContent = "OK / Lock";

    okBtn.addEventListener("click", () => {
      state.pieceNames[team][pieceType] = nameInput.value.trim();
      state.pieceNameLocked[team][pieceType] = true;
      renderBoard();
    });

    infoArea.appendChild(nameInput);
    infoArea.appendChild(okBtn);
  }

  infoArea.appendChild(uploadInput);

  topRow.appendChild(portraitBox);
  topRow.appendChild(infoArea);

  const abilityArea = document.createElement("div");
  abilityArea.className = "character-card-ability";

  if (!pieceName) {
    abilityArea.innerHTML = `
      <div class="ability-empty">
        Type a character name and lock it to connect this piece to the CSV ability file.
      </div>
    `;
  } else if (!matchedAbility) {
    abilityArea.innerHTML = `
    <div class="ability-empty ability-missing">
      <strong>No ability found</strong>
      <span>
        Check that this character name matches the Ability Spreadsheet exactly.
      </span>
      <span class="ability-hint">
        Example: the name written here must match the name in the CSV character column.
      </span>
    </div>
  `;
  } else {
    abilityArea.innerHTML = `
    <div class="ability-name">${matchedAbility.ability}</div>
    <div class="ability-text">${matchedAbility.description}</div>
    ${matchedAbility.cost ? `<div class="ability-cost">Cost: ${matchedAbility.cost}</div>` : ""}
  `;
  }

  if (matchedAbility && Array.isArray(matchedAbility.tokens) && matchedAbility.tokens.length > 0) {
    const relatedTokens = document.createElement("div");
    relatedTokens.className = "related-token-list";

    const relatedTitle = document.createElement("div");
    relatedTitle.className = "related-token-title";
    relatedTitle.textContent = "Related Tokens";

    relatedTokens.appendChild(relatedTitle);

    matchedAbility.tokens.forEach((tokenKey) => {
      const token = ensureBoardToken(tokenKey);

      if (!token) return;

      const tokenBtn = document.createElement("button");
      tokenBtn.type = "button";
      tokenBtn.className = "related-token-btn";
      tokenBtn.title = token.description || token.label;

      tokenBtn.innerHTML = `
        <span class="related-token-symbol">${GENERIC_TOKEN_SYMBOL}</span>
        <span>${token.label}</span>
      `;

      tokenBtn.addEventListener("click", (event) => {
        event.stopPropagation();

        state.selectedTool = "token";
        state.selectedToken = tokenKey;
        state.movingPiece = null;

        clearEditorHighlights();
        setActiveButton(toolButtons, null);

        updateReadouts();
      });

      relatedTokens.appendChild(tokenBtn);
    });

    abilityArea.appendChild(relatedTokens);
  }

  card.appendChild(topRow);
  card.appendChild(abilityArea);

  cardEl.appendChild(card);
}

function renderTeamTray(team, trayEl) {
  trayEl.innerHTML = "";

  SHOWCASE_PIECES.forEach((pieceType) => {
    const pieceName = state.pieceNames[team][pieceType];
    const portraitCandidates = getPortraitCandidates(pieceName);
    const imageSrc = getDisplayPortraitForPiece(team, pieceType);
    const symbol = PIECE_SYMBOLS[team][pieceType];

    const token = document.createElement("div");
    token.className = "team-piece-token";

    const isActiveCard =
      state.activeCharacterCard &&
      state.activeCharacterCard.team === team &&
      state.activeCharacterCard.pieceType === pieceType;

    const isSelectedForPlacement =
      state.selectedTeam === team &&
      state.selectedPiece === pieceType &&
      state.selectedTool === "piece";

    if (isActiveCard) {
      token.classList.add("active-character-token");
    }

    if (isSelectedForPlacement) {
      token.classList.add("selected-placement-token");
    }

    function selectCharacterAndPiece() {
      state.activeCharacterCard = { team, pieceType };
      selectPieceForPlacement(team, pieceType);
      renderBoard();
    }

    const portraitBtn = document.createElement("button");
    portraitBtn.className = "team-piece-portrait-btn";
    portraitBtn.type = "button";
    portraitBtn.title = pieceName
      ? `${pieceName} — click to view ability and select piece`
      : `${capitalize(team)} ${capitalize(pieceType)} — click to assign/select piece`;

    if (imageSrc) {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = `${team} ${pieceType}`;

      if (!state.pieceImages[team][pieceType] && portraitCandidates.length > 1) {
        let portraitIndex = 0;

        img.onerror = function () {
          portraitIndex++;

          if (portraitIndex < portraitCandidates.length) {
            img.src = portraitCandidates[portraitIndex];
          }
        };
      }

      portraitBtn.appendChild(img);
    } else {
      const fallback = document.createElement("div");
      fallback.className = "team-piece-fallback-symbol";
      fallback.textContent = symbol;
      portraitBtn.appendChild(fallback);
    }

    const pieceSelectBtn = document.createElement("button");
    pieceSelectBtn.className = "team-piece-symbol-btn";
    pieceSelectBtn.type = "button";

    const boardPieceImage = getBoardPieceImage(team, pieceType);

    if (boardPieceImage) {
      const pieceIcon = document.createElement("img");
      pieceIcon.className = "piece-select-image";
      pieceIcon.src = boardPieceImage;
      pieceIcon.alt = `${team} ${pieceType}`;
      pieceSelectBtn.appendChild(pieceIcon);
    } else {
      pieceSelectBtn.innerHTML = `
    <span class="piece-select-symbol">${symbol}</span>
  `;
    }
    pieceSelectBtn.title = `Select ${capitalize(team)} ${capitalize(pieceType)} to place/move`;

    token.appendChild(portraitBtn);
    token.appendChild(pieceSelectBtn);

    // The WHOLE token box is now clickable.
    token.addEventListener("click", selectCharacterAndPiece);

    trayEl.appendChild(token);
  });
}

function standardSetup() {
  saveUndoState();

  state.cells = createBoardData();
  state.movingPiece = null;
  state.currentTurn = "white";

  const backRank = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  backRank.forEach((piece, col) => {
    state.cells[col].pieceType = piece;
    state.cells[col].team = "black";

    state.cells[8 + col].pieceType = "pawn";
    state.cells[8 + col].team = "black";

    state.cells[48 + col].pieceType = "pawn";
    state.cells[48 + col].team = "white";

    state.cells[56 + col].pieceType = piece;
    state.cells[56 + col].team = "white";
  });

  initializeClocks(Number(timerSelect.value));
  renderBoard();
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function getPortraitLookupKeys(value) {
  if (!value) return [];

  const filename = value
    .trim()
    .split(/[\\/]/)
    .pop()
    .toLowerCase();

  const withoutExtension = filename.replace(/\.[a-z0-9]+$/i, "");

  return Array.from(new Set([
    filename,
    withoutExtension,
    withoutExtension.replace(/\s+/g, "-"),
    withoutExtension.replace(/\s+/g, "_"),
    withoutExtension.replace(/[\s_-]+/g, "")
  ]));
}

function registerUploadedPortrait(file, dataUrl) {
  const keys = getPortraitLookupKeys(file.name);

  keys.forEach((key) => {
    state.uploadedPortraits[key] = dataUrl;
  });
}

function findUploadedPortrait(matchedAbility, characterName = "") {
  const possibleValues = [
    matchedAbility?.portrait || "",
    matchedAbility?.character || "",
    characterName || ""
  ];

  for (const value of possibleValues) {
    const keys = getPortraitLookupKeys(value);

    for (const key of keys) {
      if (state.uploadedPortraits[key]) {
        return state.uploadedPortraits[key];
      }
    }
  }

  return null;
}

function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentValue = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      currentValue += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentValue.trim());
      currentValue = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (currentValue || currentRow.length > 0) {
        currentRow.push(currentValue.trim());
        rows.push(currentRow);
        currentRow = [];
        currentValue = "";
      }

      if (char === "\r" && nextChar === "\n") {
        i++;
      }
    } else {
      currentValue += char;
    }
  }

  if (currentValue || currentRow.length > 0) {
    currentRow.push(currentValue.trim());
    rows.push(currentRow);
  }

  return rows;
}

function loadThemeCSV(text) {
  /**
   * Reads the Theme Spreadsheet and turns rows into tiles, counters, and conditions.
   * The expected types are: tile, counter, condition.
   */
  const rows = parseCSV(text);

  if (rows.length < 2) {
    alert("Theme CSV needs a header row and at least one data row.");
    return;
  }

  const headers = rows[0].map(header => normalizeName(header));

  const typeIndex = headers.indexOf("type");
  const keyIndex = headers.indexOf("key");
  const labelIndex = headers.indexOf("label");
  const symbolIndex = headers.indexOf("symbol");
  const lightColorIndex = headers.indexOf("lightcolor");
  const darkColorIndex = headers.indexOf("darkcolor");
  const colorIndex = headers.indexOf("color");
  const textColorIndex = headers.indexOf("textcolor");
  const valueIndex = headers.indexOf("value");
  const descriptionIndex = headers.indexOf("description");

  if (typeIndex === -1 || keyIndex === -1 || labelIndex === -1) {
    alert("Theme CSV must include at least: type, key, label.");
    return;
  }

  const nextTiles = {};
  const nextCounters = {};
  const nextConditions = {};
  const nextTileDescriptions = {};
  const nextConditionDescriptions = {};
  const nextStyles = {};

  rows.slice(1).forEach((row) => {
    const type = row[typeIndex]?.trim().toLowerCase();
    const key = row[keyIndex]?.trim();

    if (!type || !key) return;

    const label = labelIndex !== -1 ? row[labelIndex]?.trim() || key : key;
    const symbol = symbolIndex !== -1 ? row[symbolIndex]?.trim() || "" : "";
    const lightColor = lightColorIndex !== -1 ? row[lightColorIndex]?.trim() || "" : "";
    const darkColor = darkColorIndex !== -1 ? row[darkColorIndex]?.trim() || "" : "";
    const color = colorIndex !== -1 ? row[colorIndex]?.trim() || "" : "";
    const textColor = textColorIndex !== -1 ? row[textColorIndex]?.trim() || "" : "";
    const value = valueIndex !== -1 ? row[valueIndex]?.trim() || "" : "";
    const description = descriptionIndex !== -1 ? row[descriptionIndex]?.trim() || "" : "";

    if (type === "tile") {
      nextTiles[key] = {
        key,
        label,
        symbol,
        lightColor,
        darkColor,
        color,
        textColor,
        description
      };

      nextTileDescriptions[key] = description;
    }

    if (type === "counter") {
      nextCounters[key] = {
        key,
        label,
        symbol,
        color,
        textColor,
        value,
        description
      };
    }

    if (type === "condition") {
      nextConditions[key] = {
        symbol,
        className: `condition-${key}`,
        label,
        color,
        textColor
      };

      nextConditionDescriptions[key] = symbol
        ? `${symbol} ${label}: ${description}`
        : `${label}: ${description}`;
    }

    if (type === "style") {
      nextStyles[key] = value || color || description || "";
    }
  });

  if (!nextTiles.neutral) {
    nextTiles.neutral = THEME_TILES.neutral;
    nextTileDescriptions.neutral = TILE_DESCRIPTIONS.neutral || "Normal terrain.";
  }

  THEME_TILES = nextTiles;
  MARKERS = nextCounters;
  CONDITIONS = nextConditions;
  TILE_NAMES = Object.keys(THEME_TILES);
  TILE_DESCRIPTIONS = nextTileDescriptions;
  CONDITION_DESCRIPTIONS = nextConditionDescriptions;

  THEME_STYLES = {
    ...THEME_STYLES,
    ...nextStyles
  };

  applyThemeStyles();

  renderThemeControls();
  renderTileDescriptions();
  renderConditionDescriptions();
  renderTerrainEditor();
  renderCounterEditor();
  renderConditionEditor();
  renderBoard();

  alert("Theme spreadsheet loaded.");
}

function applyThemeStyles() {
  const gameStage = document.getElementById("gameStage");
  const boardShell = document.querySelector(".board-shell");

  if (!gameStage || !stageBackgroundImage) return;

  // Full playing-area background
  if (THEME_STYLES.stageBackgroundImage) {
    stageBackgroundImage.src = THEME_STYLES.stageBackgroundImage;
    stageBackgroundImage.classList.add("active");
    gameStage.classList.add("stage-background-active");
  } else {
    stageBackgroundImage.removeAttribute("src");
    stageBackgroundImage.classList.remove("active");
    gameStage.classList.remove("stage-background-active");
  }

  // Board-only design image
  if (boardShell && boardDesignImage) {
    if (THEME_STYLES.boardDesignImage) {
      boardDesignImage.src = THEME_STYLES.boardDesignImage;
      boardDesignImage.classList.add("active");
      boardShell.classList.add("board-design-active");
    } else {
      boardDesignImage.removeAttribute("src");
      boardDesignImage.classList.remove("active");
      boardShell.classList.remove("board-design-active");
    }
  }
}

function loadAbilityCSV(text) {
  const rows = parseCSV(text);

  if (rows.length < 2) {
    alert("CSV needs a header row and at least one character row.");
    return;
  }

  const headers = rows[0].map(header => normalizeName(header));

  const characterIndex = headers.indexOf("character");
  const abilityIndex = headers.indexOf("ability");
  const descriptionIndex = headers.indexOf("description");
  const costIndex = headers.indexOf("cost");
  const portraitIndex = headers.indexOf("portrait");
  const tokensIndex = headers.indexOf("tokens");

  if (characterIndex === -1 || abilityIndex === -1 || descriptionIndex === -1) {
    alert("CSV must include: character, ability, description. Cost is optional.");
    return;
  }

  state.abilityLibrary = {};

  rows.slice(1).forEach(row => {
    const character = row[characterIndex]?.trim();
    if (!character) return;

    const tokenText = tokensIndex !== -1 ? row[tokensIndex]?.trim() || "" : "";

    const abilityTokens = tokenText
      ? tokenText.split("|").map(token => token.trim()).filter(Boolean)
      : [];

    abilityTokens.forEach((tokenKey) => {
      ensureBoardToken(tokenKey);
    });

    state.abilityLibrary[normalizeName(character)] = {
      character,
      ability: row[abilityIndex]?.trim() || "",
      description: row[descriptionIndex]?.trim() || "",
      cost: costIndex !== -1 ? row[costIndex]?.trim() || "" : "",
      portrait: portraitIndex !== -1 ? row[portraitIndex]?.trim() || "" : "",
      tokens: abilityTokens
    };
  });

  renderBoard();
  alert("Ability spreadsheet loaded.");
}

function getAbilityForCharacter(characterName) {
  if (!characterName) return null;
  return state.abilityLibrary[normalizeName(characterName)] || null;
}

function getPortraitForCharacter(characterName) {
  const matchedAbility = getAbilityForCharacter(characterName);
  if (!matchedAbility) return null;

  const uploadedPortrait = findUploadedPortrait(matchedAbility, characterName);

  if (uploadedPortrait) {
    return uploadedPortrait;
  }

  return normalizePortraitPath(matchedAbility.portrait || "");
}

function getPortraitCandidates(characterName) {
  const matchedAbility = getAbilityForCharacter(characterName);

  const uploadedPortrait = findUploadedPortrait(matchedAbility, characterName);

  if (uploadedPortrait) {
    return [uploadedPortrait];
  }

  const portrait = normalizePortraitPath(matchedAbility?.portrait || "");

  if (!portrait) return [];

  const hasExtension = /\.[a-zA-Z0-9]+$/.test(portrait);

  if (!hasExtension) {
    return [
      `${portrait}.jpg`,
      `${portrait}.jpeg`,
      `${portrait}.png`,
      `${portrait}.webp`
    ];
  }

  const basePath = portrait.replace(/\.[a-zA-Z0-9]+$/, "");

  return [
    portrait,
    `${basePath}.jpg`,
    `${basePath}.jpeg`,
    `${basePath}.png`,
    `${basePath}.webp`
  ];
}

const DEFAULT_PORTRAIT_FOLDER = "assets/portraits/";

function normalizePortraitPath(portraitValue) {
  if (!portraitValue) return "";

  const cleanValue = portraitValue.trim();

  if (
    cleanValue.startsWith("http://") ||
    cleanValue.startsWith("https://") ||
    cleanValue.startsWith("data:")
  ) {
    return cleanValue;
  }

  if (
    cleanValue.startsWith("assets/") ||
    cleanValue.startsWith("./") ||
    cleanValue.startsWith("/")
  ) {
    return cleanValue;
  }

  return `${DEFAULT_PORTRAIT_FOLDER}${cleanValue}`;
}

function normalizeCellData(cell) {
  if (!cell) {
    return createEmptyCell();
  }

  if (!cell.conditions) {
    cell.conditions = cell.condition ? [cell.condition] : [];
  }

  delete cell.condition;

  if (!Array.isArray(cell.tokens)) {
    cell.tokens = cell.token ? [cell.token] : [];
  }

  delete cell.token;

  if (typeof cell.mark !== "string") {
    cell.mark = "";
  }

  if (!cell.markColor) {
    cell.markColor = "neutral";
  }

  if (!cell.tile) {
    cell.tile = "neutral";
  }

  if (!THEME_TILES[cell.tile]) {
    cell.tile = "neutral";
  }

  return cell;
}

/*Save/Load buttons*/
function getSaveData() {
  return {
    rows: state.rows,
    cols: state.cols,
    cells: state.cells,

    worldDetails: state.worldDetails,

    pieceImages: state.pieceImages,
    hiddenPortraits: state.hiddenPortraits,
    pieceNames: state.pieceNames,
    pieceNameLocked: state.pieceNameLocked,

    theme: {
      tiles: THEME_TILES,
      counters: MARKERS,
      conditions: CONDITIONS,
      boardTokens: BOARD_TOKENS,
      tileDescriptions: TILE_DESCRIPTIONS,
      conditionDescriptions: CONDITION_DESCRIPTIONS,
      styles: THEME_STYLES
    },

    abilityLibrary: state.abilityLibrary,
    //uploadedPortraits: state.uploadedPortraits,
    currentTurn: state.currentTurn,
    clocks: state.clocks
  };
}

function applySaveData(data) {
  if (!data || !Array.isArray(data.cells)) {
    alert("Could not load world. The saved data looks wrong.");
    return;
  }

  state.rows = 8;
  state.cols = 8;
  state.cells = data.cells.map(normalizeCellData);

  state.worldDetails = data.worldDetails || {
    name: "",
    description: "",
    rulesNotes: ""
  };

  syncWorldDetailsToInputs();

  state.pieceImages = data.pieceImages || state.pieceImages;
  state.hiddenPortraits = data.hiddenPortraits || state.hiddenPortraits;
  state.pieceNames = data.pieceNames || state.pieceNames;
  state.pieceNameLocked = data.pieceNameLocked || state.pieceNameLocked;
  state.abilityLibrary = data.abilityLibrary || state.abilityLibrary;
  //state.uploadedPortraits = data.uploadedPortraits || {};
  state.currentTurn = data.currentTurn || "white";
  state.clocks = data.clocks || state.clocks;
  state.movingPiece = null;

  if (data.theme) {
    THEME_TILES = data.theme.tiles || THEME_TILES;
    MARKERS = data.theme.counters || MARKERS;
    CONDITIONS = data.theme.conditions || CONDITIONS;
    BOARD_TOKENS = data.theme.boardTokens || BOARD_TOKENS;
    TILE_DESCRIPTIONS = data.theme.tileDescriptions || TILE_DESCRIPTIONS;
    CONDITION_DESCRIPTIONS = data.theme.conditionDescriptions || CONDITION_DESCRIPTIONS;
    THEME_STYLES = data.theme.styles || THEME_STYLES;
    TILE_NAMES = Object.keys(THEME_TILES);

    applyThemeStyles();
    renderThemeControls();
    renderTileDescriptions();
    renderConditionDescriptions();
  }

  renderBoard();
  updateReadouts();
}

function getAllPresets() {
  const raw = localStorage.getItem("ninjaChessSetups");

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
}

function saveAllPresets(presets) {
  try {
    localStorage.setItem("ninjaChessSetups", JSON.stringify(presets));
  } catch (error) {
    console.error("localStorage save failed:", error);
    throw error;
  }
}

function refreshPresetList() {
  if (!presetSelect) return;

  const presets = getAllPresets();
  const names = Object.keys(presets).sort();

  presetSelect.innerHTML = "";

  if (names.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No saved worlds";
    presetSelect.appendChild(option);
    return;
  }

  names.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    presetSelect.appendChild(option);
  });
}

function savePreset() {
  const name = presetNameInput.value.trim();

  if (!name) {
    alert("Give the world a name first.", "warning");
    return;
  }

  try {
    const presets = getAllPresets();
    presets[name] = getSaveData();

    saveAllPresets(presets);
    refreshPresetList();

    presetSelect.value = name;

    showSaveStatus(`Saved ✓ ${name}`, "success");
  } catch (error) {
    console.error("Save failed:", error);

    showSaveStatus("Could not save world", "danger");
  }
}

function loadPreset() {
  const name = presetSelect.value;

  if (!name) {
    showSaveStatus("No saved world selected", "warning");
    return;
  }

  const presets = getAllPresets();
  const data = presets[name];

  if (!data) {
    showSaveStatus("World not found", "danger");
    return;
  }

  applySaveData(data);
  showSaveStatus(`Loaded ✓ ${name}`, "success");
}

function deletePreset() {
  const name = presetSelect.value;

  if (!name) {
    showSaveStatus("No saved world selected", "warning");
    return;
  }

  const confirmed = confirm(`Delete world "${name}"?`);

  if (!confirmed) {
    return;
  }

  const presets = getAllPresets();
  delete presets[name];

  saveAllPresets(presets);
  refreshPresetList();

  showSaveStatus(`Deleted ${name}`, "neutral");
}

if (worldNameInput) {
  worldNameInput.addEventListener("input", syncWorldDetailsFromInputs);
}

if (worldDescriptionInput) {
  worldDescriptionInput.addEventListener("input", () => {
    syncWorldDetailsFromInputs();
    updateWorldDescriptionCount();
  });
}

if (worldRulesInput) {
  worldRulesInput.addEventListener("input", syncWorldDetailsFromInputs);
}

toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedTool = button.dataset.tool;

    clearEditorHighlights();

    state.selectedCondition = null;
    state.activeCharacterCard = null;
    state.movingPiece = null;

    setActiveButton(toolButtons, button);
    updateReadouts();
  });
});

if (shortcutHelpBtn && shortcutHelpPanel) {
  shortcutHelpBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    shortcutHelpPanel.classList.toggle("open");
  });
}

pieceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedPiece = button.dataset.piece;
    setActiveButton(pieceButtons, button);
    updateReadouts();
  });
});

teamButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedTeam = button.dataset.team;
    setActiveButton(teamButtons, button);
    updateReadouts();
  });
});

exportBtn.addEventListener("click", exportBoard);
importBtn.addEventListener("click", importBoard);

function isTypingInFormField(event) {
  const element = event.target;

  if (!element) return false;

  const tagName = element.tagName?.toLowerCase();

  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    element.isContentEditable
  );
}

function clickButtonByShortcut(buttons, index) {
  const button = buttons[index];

  if (!button) return false;

  button.click();
  return true;
}

function handleKeyboardShortcuts(event) {
  // Do not trigger shortcuts while typing names, descriptions, CSV fields, etc.
  if (isTypingInFormField(event)) return;

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
    undoLastAction();
    event.preventDefault();
    return;
  }

  const key = event.key.toLowerCase();

  const terrainKeys = ["q", "w", "e", "r", "t", "y"];
  const counterKeys = ["a", "s", "d", "f", "g", "h"];
  const conditionKeys = ["z", "x", "c", "v", "b", "n"];

  const terrainIndex = terrainKeys.indexOf(key);
  const counterIndex = counterKeys.indexOf(key);
  const conditionIndex = conditionKeys.indexOf(key);

  if (terrainIndex !== -1) {
    const terrainButtons = Array.from(tileButtonGrid.querySelectorAll(".tile-btn"));
    const didClick = clickButtonByShortcut(terrainButtons, terrainIndex);

    if (didClick) {
      event.preventDefault();
    }

    return;
  }

  if (counterIndex !== -1) {
    const counterButtons = Array.from(counterButtonGrid.querySelectorAll(".mark-color-btn"));
    const didClick = clickButtonByShortcut(counterButtons, counterIndex);

    if (didClick) {
      event.preventDefault();
    }

    return;
  }

  if (conditionIndex !== -1) {
    const conditionButtons = Array.from(conditionButtonGrid.querySelectorAll(".condition-btn"));
    const didClick = clickButtonByShortcut(conditionButtons, conditionIndex);

    if (didClick) {
      event.preventDefault();
    }

    return;
  }

  if (key === "escape") {
    resetInterfaceSelection();
    event.preventDefault();
  }
}

function bindThemeControlEvents() {
  /**
   * Connects the dynamically generated theme buttons to the editor logic.
   * We call this once at startup and again whenever a new theme is uploaded.
   */
  tileButtons.forEach((button) => {
    const tileName = button.dataset.tile;

    button.addEventListener("click", () => {
      state.selectedTile = tileName;
      state.selectedTool = "tile";

      clearEditorHighlights("terrain");

      const tileToolButton = toolButtons.find((toolButton) => toolButton.dataset.tool === "tile");

      if (tileToolButton) {
        setActiveButton(toolButtons, tileToolButton);
      }

      setActiveButton(Array.from(tileButtonGrid.querySelectorAll(".tile-btn")), button);
      clearTileBtn.classList.remove("active");

      updateReadouts();
    });
  });

  markColorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedMarkColor = button.dataset.markColor;
      state.selectedMarkValue = button.dataset.markValue;
      state.selectedTool = "mark";

      clearEditorHighlights("counter");

      setActiveButton(markColorButtons, button);

      const markToolButton = toolButtons.find((toolButton) => toolButton.dataset.tool === "mark");
      if (markToolButton) {
        setActiveButton(toolButtons, markToolButton);
      }

      updateReadouts();
    });
  });

  conditionButtons.forEach((button) => {
    const conditionName = button.dataset.condition;

    button.addEventListener("click", () => {
      state.selectedTool = "condition";
      state.selectedCondition = conditionName;

      clearEditorHighlights("condition");

      setActiveButton(toolButtons, null);
      setActiveButton(conditionButtons, button);
      updateReadouts();
    });
  });
}

// ================================================================================
// EVENT LISTENERS
// ================================================================================

document.addEventListener("click", (event) => {
  const clickedInteractiveElement = event.target.closest(`
    button,
    input,
    textarea,
    select,
    label,
    summary,
    details,
    .cell,
    .team-piece-token,
    .character-card-box
  `);

  if (
    shortcutHelpPanel &&
    shortcutHelpPanel.classList.contains("open") &&
    !event.target.closest(".shortcut-help-panel") &&
    !event.target.closest(".shortcut-help-btn")
  ) {
    shortcutHelpPanel.classList.remove("open");
  }

  if (clickedInteractiveElement) return;

  resetInterfaceSelection();
});

savePresetBtn.addEventListener("click", savePreset);
loadPresetBtn.addEventListener("click", loadPreset);
deletePresetBtn.addEventListener("click", deletePreset);

timerSelect.addEventListener("change", () => {
  initializeClocks(Number(timerSelect.value));
});

passTurnBtn.addEventListener("click", () => {
  passTurn();
});

document.querySelectorAll(".clock-line").forEach(el => el.classList.remove("active"));

if (state.currentTurn === "white") {
  whiteTimerReadout.parentElement.classList.add("active");
} else {
  blackTimerReadout.parentElement.classList.add("active");
}

standardSetupBtn.addEventListener("click", standardSetup);

if (undoBtn) {
  undoBtn.addEventListener("click", undoLastAction);
}

clearConditionBtn.addEventListener("click", () => {
  state.selectedTool = "condition-clear";
  state.selectedCondition = null;

  clearEditorHighlights("condition");

  setActiveButton(conditionButtons, clearConditionBtn);
  updateReadouts();
});

if (clearBoardBtn) {
  clearBoardBtn.addEventListener("click", () => {
    saveUndoState();

    state.cells = createBoardData();
    state.movingPiece = null;
    state.selectedCondition = null;

    renderBoard();
    updateReadouts();
  });
}

clearTileBtn.addEventListener("click", () => {
  state.selectedTool = "clearTile";
  state.selectedTile = "neutral";

  clearEditorHighlights("terrain");

  const tileToolButton = toolButtons.find((button) => button.dataset.tool === "tile");
  if (tileToolButton) {
    setActiveButton(toolButtons, tileToolButton);
  }

  setActiveButton(tileButtons, null);
  clearTileBtn.classList.add("active");

  updateReadouts();
});

clearCounterBtn.addEventListener("click", () => {
  state.selectedTool = "clearMark";

  clearEditorHighlights("counter");

  const markToolButton = toolButtons.find((button) => button.dataset.tool === "mark");
  if (markToolButton) {
    setActiveButton(toolButtons, markToolButton);
  }

  setActiveButton(markColorButtons, null);
  updateReadouts();
});

addTerrainBtn.addEventListener("click", () => {
  const newKey = `terrain_${Date.now()}`;

  THEME_TILES[newKey] = {
    key: newKey,
    label: "New Terrain",
    symbol: "",
    mode: "color",
    baseColor: "#7d838f",
    lightColor: adjustColor("#7d838f", 38),
    darkColor: adjustColor("#7d838f", -28),
    image: null,
    color: "#7d838f",
    textColor: "#ffffff",
    description: "Describe this terrain."
  };

  TILE_DESCRIPTIONS[newKey] = "Describe this terrain.";

  refreshThemeAfterEditorChange();
});

fillBoardTileBtn.addEventListener("click", () => {
  saveUndoState();

  const tileToApply = state.selectedTool === "clearTile"
    ? "neutral"
    : state.selectedTile;

  state.cells.forEach((cell) => {
    cell.tile = tileToApply;
  });

  returnToPieceTool();
  clearTileBtn.classList.remove("active");
  renderBoard();
});

clearBoardTilesBtn.addEventListener("click", () => {
  saveUndoState();

  state.cells.forEach((cell) => {
    cell.tile = "neutral";
  });

  renderBoard();
});

addCounterBtn.addEventListener("click", () => {
  const newKey = `counter_${Date.now()}`;

  MARKERS[newKey] = {
    key: newKey,
    label: "New Counter",
    color: "#6b7280",
    textColor: "#ffffff",
    value: "-1",
    description: "Describe this counter."
  };

  refreshThemeAfterEditorChange();
});

addConditionBtn.addEventListener("click", () => {
  const newKey = `condition_${Date.now()}`;

  CONDITIONS[newKey] = {
    symbol: "•",
    className: `condition-${newKey}`,
    label: "New Condition",
    color: "#4b5563",
    textColor: "#ffffff"
  };

  CONDITION_DESCRIPTIONS[newKey] = "Describe this condition.";

  refreshThemeAfterEditorChange();
});

abilityCsvInput.addEventListener("change", () => {
  const file = abilityCsvInput.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    loadAbilityCSV(event.target.result);
  };

  reader.readAsText(file);
});

if (portraitImageInput) {
  portraitImageInput.addEventListener("change", () => {
    const files = Array.from(portraitImageInput.files || []);

    if (files.length === 0) return;

    let loadedCount = 0;

    files.forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();

      reader.onload = function (event) {
        registerUploadedPortrait(file, event.target.result);

        loadedCount++;

        if (portraitUploadStatus) {
          portraitUploadStatus.textContent = `${loadedCount} portrait image${loadedCount === 1 ? "" : "s"} uploaded.`;
        }

        renderBoard();
      };

      reader.readAsDataURL(file);
    });
  });
}

function init() {
  state.cells = createBoardData();

  state.cells.forEach((cell) => {
    if (!THEME_TILES[cell.tile]) {
      cell.tile = "neutral";
    }
  });

  renderThemeControls();
  renderTileDescriptions();
  renderConditionDescriptions();
  renderTerrainEditor();
  renderCounterEditor();
  renderConditionEditor();
  renderShortcutHelpPanel();
  updateWorldDescriptionCount();
  refreshPresetList();
  applyThemeStyles();
  updateReadouts();
  renderBoard();
  scaleGameStage();
  initializeClocks(0);
}

window.addEventListener("resize", scaleGameStage);

document.addEventListener("keydown", handleKeyboardShortcuts);

init();