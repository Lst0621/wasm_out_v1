export {}; // ensure this .d.ts is treated as a module by TS

declare module "./wasm_bars_game" {
    export interface WasmBarsGameModule {
        _bars_game_create(): number;
        _bars_game_destroy(handle: number): void;
        _bars_game_set_seed(handle: number, seed: number): void;
        _bars_game_init(handle: number): void;
        _bars_game_get_state(handle: number, out_ptr: number): void;
        _bars_game_get_future_state(handle: number, choice_index: number, out_ptr: number): void;
        _bars_game_apply_choice(handle: number, index: number): void;
        _bars_game_is_ended(handle: number): number;
        _bars_game_state_size(handle: number): number;
        _bars_game_num_choices(handle: number): number;
        _bars_game_min_val(handle: number): number;
        _bars_game_max_val(handle: number): number;
        _malloc(size: number): number;
        _free(ptr: number): void;
    }

    const init: (moduleOverrides?: { wasmBinary?: Buffer | Uint8Array }) => Promise<WasmBarsGameModule>;
    export default init;
}

