var e={app:{bedmesh:{label:{active:"已啟用",box_scale:"顯示比例",flat_surface:"顯示參考平面",mesh_matrix:"網格矩陣",probed_matrix:"探測點矩陣",profile_name:"配置文件",remove_profile:"删除 %{name} 配置文件",scale:"顯示偏差值",wireframe:"顯示網格線"},msg:{hint:"如果將 %{name} 另存, 你也可以選擇刪除此 %{name} 配置",not_found:"熱床網格配置不存在",not_loaded:"熱床網格配置不存在"},tooltip:{calibrate:"開始校準，該校準信息會默認保存為 defalut",delete:"刪除配置",load:"加載配置",save:"將校準的配置文件應用於 printer.cfg"}},chart:{label:{current:"當前值",item:"名稱",power:"功率",target:"目標值",rate_of_change:"變化值"},tooltip:{help:"按住 Shift 鍵可縮放圖表。<br />單擊一個項目名稱或功率可在圖表中切換顯示。"}},console:{label:{auto_scroll:"自動滾動",flip_layout:"翻轉布局",hide_temp_waits:"隱藏溫度信息"},placeholder:{command:"按 'tab' 自動補全命令，按 '↑↓' 鍵獲取歷史命令，輸入 'help' 獲取命令幫助"}},endpoint:{error:{cant_connect:"出了點問題，Fluidd 無法連接目標。你確定這是正確的設備地址？",cors_error:"被 CORS 政策阻止，請查看 Moonraker 幫助",cors_note:'這可能意味著您需要修改 Moonraker 配置。請參閱有關多打印機設置的<a href=\\"%{url}\\" target=\\"_blank\\">文檔</a>'},hint:{add_printer:"例如：http://fluiddpi.local"},msg:{trouble:'遇到麻煩？<a href="%{url}" target="_blank">點擊此處</a> 查看更多信息。'},tooltip:{endpoint_examples:"輸入您的 Moonraker API 地址。<br />例如：<br/><blockquote>http://fluidd.local, http://192.168.1.276</blockquote>"}},endstop:{label:{open:"未觸發",triggered:"已觸發"},msg:{subtitle:"使用“刷新”按鈕更新限位開關狀態。"}},file_system:{filters:{label:{print_start_time:"隱藏已打印項目",print_start_time_desc:"隱藏已經打印的項目文件",klipper_backup_files:"隱藏Klipper備份文件"}},label:{dir_name:"目錄名稱",disk_usage:"磁盤使用率",diskinfo:"磁盤信息",downloaded:"下載完成",file_name:"文件名",transfer_rate:"傳輸速率",uploaded:"上傳完成",view_section_documentation:"%{section} 查看文檔"},msg:{not_found:"文件未找到",processing:"處理中..."},overlay:{drag_files_folders_upload:"<strong>拖動</strong>文件和文件夾到這裡上傳",drag_files_enqueue:"<strong>拖動</strong>文件到這裡排隊"},title:{add_dir:"新建目錄",add_file:"新建文件",command_palette:"命令面板",download_file:"下載文件",rename_dir:"重命名目錄",rename_file:"重命名文件",upload_file:"上傳文件"},tooltip:{low_on_space:"磁盤空間不足",root_disabled:"{root} G代碼文件目錄不可用，請首先連接打印機或者檢查G代碼存放目錄的路徑與讀權限"},url:{klipper_config:"https://www.klipper3d.org/zh-Hant/Config_Reference.html#%{hash}",moonraker_config:"https://moonraker.readthedocs.io/en/latest/configuration/#%{hash}",moonraker_telegram_bot_config:"https://github.com/nlef/moonraker-telegram-bot/wiki/Sample-config#%{hash}"}},gcode:{btn:{load_current_file:"載入當前文件"},label:{current_layer_height:"當前層高",exclude_object:"排除對象",follow_progress:"跟隨打印進度",layer:"當前層數",layers:"總層數",parsed:"已解析",show_current_layer:"顯示當前層",show_extrusions:"顯示已打印部分",show_moves:"顯示移動走線",show_next_layer:"顯示下一層",show_parts:"顯示零件",show_previous_layer:"顯示上一層",show_retractions:"顯示回抽",parsing_file:"解析文件"},msg:{confirm:'文件 "%{filename}" 大小為 %{size}，這可能會導致系統短暫失去響應，是否確認？'}},general:{btn:{abort:"中止",accept:"接受",add:"添加",add_dir:"新建目錄",add_file:"新建文件",add_printer:"添加打印機",add_to_queue:"添加到隊列",adjust_layout:"調整儀表板布局",adjusted:"調整",all:"全部",auth_unsure:"不確定為什麼會看到這個？",calibrate:"校準",cancel:"取消",clear_profile:"清除配置文件",close:"關閉",config_reference:"配置參考",create_zip_archive:"壓縮",delete:"刪除",download:"下載",edit:"編輯",exit_layout:"退出修改模式",extrude:"擠出",filter:"過濾",forgot_password:"忘記密碼？",heaters_off:"停止加熱",job_queue:"作業隊列",load_all:"全部加載",login:"登入",logout:"登出",more_information:"更多信息",pause:"暫停",preheat:"預熱",presets:"預設",preview_gcode:"預覽 Gcode",print:"打印",quad_gantry_level:"龍門架調平",reboot:"重啟",recover:"恢復",refresh:"刷新",reload:"刷新",remove:"删除",remove_all:"删除全部",rename:"重命名",reprint:"重新打印",reset_file:"重置文件",reset_layout:"重置布局",reset_default_layout:"重置預設佈局",restart_firmware:"重啟Firmware",restart_service:"重啟 %{service}",restart_service_klipper:"重啟Klipper",restart_service_moonraker:"重啟Moonraker",resume:"恢覆",retract:"回抽",return_dashboard:"返回到儀錶板",save:"保存",save_as:"另存為",save_restart:"保存並重啟",save_config_and_restart:"保存配置並重新啟動",send:"發送",set_color:"設置顏色",set_default_layout:"設置為預設佈局",shutdown:"關閉",snooze:"打盹",socket_reconnect:"重新連接",socket_refresh:"強制刷新",upload:"上傳",upload_files:"上傳文件",upload_folder:"上傳資料夾",upload_print:"上傳並打印",view:"查看",reset_stats:"重置統計信息"},error:{app_setup_link:'如需查看 Fluidd 詳細配置規則，請點擊<a target="_blank" href="%{url}">此處</a>。',app_warnings_found:"％{appName} 出現警告",components_config:'如需查看 Moonraker 詳細配置規則，請點擊<a target="_blank" href="%{url}">此處</a>。',failed_components:"Moonraker 插件啟用失敗，請檢查您的日志，更新您的配置並重新啟動 Moonraker。"},label:{accel_to_decel:"加速到減速度",acceleration:"加速度",accepted_screws:"認可螺絲",actual_time:"實際剩余",add_camera:"添加攝像頭",add_filter:"添加過濾",add_preset:"添加預設",add_user:"添加用戶",all:"全部",api_key:"API 密鑰",api_url:"Moonraker 服務器地址",auth_source:"驗證源",category:"分類",change_password:"更改密碼",clear_all:"全部清除",color:"顏色",command:"命令",confirm:"確認",current_password:"當前密碼",current_user:"當前使用者",default:"預設",disabled_while_printing:"打印時禁用",edit_camera:"編輯攝像頭設置",edit_filter:"編輯過濾器",edit_preset:"編輯預設",edit_user:"編輯用戶",extrude_length:"擠出距離",extrude_speed:"擠出速度",filament:"已用耗材",file:"文件名稱",finish_time:"完成時間",flow:"擠出流量",free:"可用",heaters_busy:"打印機正忙。關閉熱端有可能會導致打印失敗。",high:"最高溫度",host:"主機",layer:"層數",layout:"布局",ldap:"LDAP",longest_job:"單次耗時最長",low:"最低溫度",manage_accounts:"賬戶管理",user_managed_source:"由 %{source} 身份驗證管理的用戶",m117:"M117",moonraker:"Moonraker",name:"名稱",new_password:"新密碼",no_notifications:"暫無通知",on:"開啟",off:"關閉",numeric_prefix_sort:"數字前綴排序",password:"密碼",partial_of_total:"%{partial} - %{total}",pause_at_layer:"在層暫停",pause_at_next_layer:"在下一層暫停",pause_at_layer_number:"在圖層編號處暫停",power:"設備",pressure_advance:"壓力補償",printers:"打印機列表",progress:"當前層進度",requested_speed:"請求速度",retract_length:"回抽距離",retract_speed:"回抽速度",save_as:"另存為",screw_index:"螺絲索引",screw_name:"螺絲名稱",screw_number:"螺絲 %{index}",services:"服務",slicer:"切片剩余",smooth_time:"平滑時間",speed:"移動速度",sqv:"轉角速度",stepper_enabled:"啟用步進器",synced_extruder:"同步擠出機",thumbnail_size:"縮圖大小",total:"已用時間",total_filament:"總消耗耗材",total_filament_avg:"平均消耗耗材",total_jobs:"總任務次數",total_print_time:"總打印時間",total_print_time_avg:"平均打印時間",total_time:"總時間",total_time_avg:"平均時間",turn_device_on:"開啟 %{device}",turn_device_off:"關閉 %{device}",uncategorized:"未分類",unretract_extra_length:"回抽額外裝填量",unretract_speed:"回抽裝填速度",upload_and_print:"上傳和打印",used:"已用",username:"用戶名",velocity:"速度",version_sort:"版本排序",visible:"可見性",z_offset:"Z軸偏移",unsaved_changes:"未保存的修改",alias:"别名",apply_z_offset:"應用並保存Z軸偏移量",edit_category:"編輯分類",add_category:"添加分類",file_time:"預計剩余"},msg:{password_changed:"密碼已更改",wrong_password:"密碼錯誤",bed_screws_adjust:"如果需要對當前螺釘進行重大調整，請單擊<b>已調整</b>； 否則，單擊<b>接受</b>繼續。",welcome_back:"歡迎回來。<br>在下面登錄以與您的打印機保持聯繫。",offline_ready:"Fluidd 現在可以離線工作了。",needs_refresh:"有新內容可用，請單擊 <b>重新加載</b> 按鈕進行更新。",pending_configuration_sections_deleted:"以下部分已標記為刪除",rolledover_logs:"以下應用程序日誌已更新：%{applications}"},simple_form:{error:{arrayofnums:"僅允許輸入數字",credentials:"無效證書",exists:"用戶已存在",invalid_number:"無效數字",invalid_url:"無效的URL地址",invalid_expression:"無效表達",max:"最大 %{max}",min:"長度最小%{min}位",min_or_0:"最小 %{min} 或 0",password_username:"用戶名密碼不匹配",required:"必填",invalid_aspect:"寬高比無效"},msg:{confirm:"是否確認？",confirm_exclude_object:"您確定要從打印中排除該對象嗎？",confirm_forcemove_toggle:"這可能會損壞打印機！是否確認？",confirm_reboot_host:"這會重啟您的系統！是否確認？",confirm_shutdown_host:"這會關閉您的系統！是否確認？",confirm_service_start:"您確定要啟動 %{name} 服務嗎？",confirm_service_restart:"你確定要重啟 %{name} 服務嗎?",confirm_service_stop:"你確定要停止 %{name} 服務嗎?",confirm_power_device_toggle:"這會切換設備開關狀態！是否確認？",unsaved_changes:"這會丟失未保存的更改！是否確認？",no_file_preview:" 當前無法預覽%{name} 。"}},table:{header:{actions:"展開",chamber_temp:"腔室溫度",end_time:"結束時間",estimated_time:"預計時間",filament:"預計使用耗材",filament_name:"耗材名稱",filament_type:"耗材類型",filament_used:"實際使用耗材",filament_weight_total:"耗材重量",first_layer_bed_temp:"起始層熱床溫度",first_layer_extr_temp:"起始層擠出溫度",first_layer_height:"起始層高",height:"模型高度",last_printed:"上次打印時間",layer_height:"層高",modified:"修改時間",name:"名稱",nozzle_diameter:"噴嘴直徑",print_duration:"打印時間",time_added:"添加時間",time_in_queue:"排隊時間",size:"文件大小",slicer:"切片軟件",slicer_version:"軟件版本",start_time:"開始時間",status:"狀態",total_duration:"總耗時"}},title:{add_chart:"添加圖表",add_printer:"添加打印機",bedmesh:"熱床網格補償",bedmesh_controls:"熱床網格控制",camera:"攝像頭",config_files:"配置文件",configure:"配置",console:"控制台",diagnostics:"診斷",edit_chart:"編輯圖表",endstops:"限位開關",fans_outputs:"風扇和輸出",gcode_preview:"Gcode 預覽",history:"任務歷史",home:"儀表板",jobs:"任務列表",job_queue:"任務隊列",limits:"打印機限制",macros:"宏",metrics_explorer:"指標瀏覽器",not_found:"404 未找到",other_files:"其他文件（日志、文檔及參考配置）",pending_configuration_changes:"掛起的配置更改",retract:"固件回抽",rollover_logs:"滾動日誌",runout_sensors:"斷料檢測傳感器",settings:"設置",stats:"打印任務統計",system:"系統",system_overview:"系統信息",temperature:"溫度",timelapse:"延時",tool:"移動控制",tune:"調整"},tooltip:{browse_metrics:"瀏覽可用指標",estop:"緊急停止",managed_by_moonraker:"由您的 moonraker 配置進行管理",notifications:"通知",reload_klipper:"重新載入 Klipper 配置文件",reload_restart_klipper:"重新載入 Klipper 配置並重啟 MCU",restart_klipper:"重啟 Klipper 服務",run_collector:"運行收集器",rollover_logs:"滾動日誌"}},history:{msg:{confirm:"這將清除所有歷史記錄和打印機統計信息！是否確認？",confirm_jobs:"這將清除所有作業！是否確認？",confirm_stats:"這將清除所有統計數據！是否確認？"}},job_queue:{msg:{confirm:"這將清除整個打印機隊列！是否確認？"}},printer:{state:{busy:"處理中",cancelled:"已取消",complete:"完成",idle:"空閒",loading:"加載中",paused:"已暫停",printing:"打印中",ready:"就緒",standby:"待機"}},setting:{btn:{add_camera:"添加攝像頭",add_category:"添加分類",add_filter:"添加過濾器",add_metric:"添加指標",add_thermal_preset:"添加預設",add_user:"添加用戶",reset:"重置",select_theme:"選擇顏色"},camera_type_options:{mjpegadaptive:"MJPEG 自適應",mjpegstream:"MJPEG 視頻流",hlsstream:"HLS流",video:"IP 攝像頭",iframe:"HTTP 頁面"},camera_rotate_options:{90:"90度",180:"180度",270:"270度",none:"不旋轉"},label:{all_off:"全部禁用",all_on:"全部啟用",aspect_ratio:"縱橫比",aspect_ratio_format:"[寬度：高度]",auto_edit_extensions:"自動進入編輯模式的文件類型",auto_follow_on_file_load:"自動跟踪文件加載進度",auto_load_on_print_start:"打印開始時自動加載文件",auto_load_mobile_on_print_start:"在移動設備上自動加載文件",axes:"軸",camera_flip_x:"水平翻轉",camera_flip_y:"垂直翻轉",camera_fullscreen_action:{title:"全屏動作",embed:"嵌入",rawstream:"原始流"},camera_rotate_by:"旋轉角度",camera_stream_type:"視頻流類型",card:"卡片",collector:"收集器",confirm_on_estop:"緊急停止時是否需要確認",confirm_on_power_device_change:"改變設備開關狀態時需要確認",confirm_on_save_config_and_restart:"在保存並重新啟動之前查看掛起的配置更改",confirm_dirty_editor_close:"編輯器有未保存的更改時需要確認",contains:"包含字符",dark_mode:"深色模式",dashed:"虛線",default_extrude_length:"默認擠出距離",default_extrude_speed:"默認擠出速度",default_min_layer_height:"默認最小層高",default_toolhead_move_length:"默認打印頭移動距離",default_toolhead_xy_speed:"默認 XY 軸移動速度",default_toolhead_z_speed:"默認 Z 軸移動速度",dotted:"点线",draw_background:"顯示背景",enable:"啟用",enable_diagnostics:"啟用診斷",enable_notifications:"更新通知",expression:"表達式",extrusion_line_width:"擠出線寬",flip_horizontal:"水平翻轉",flip_vertical:"垂直翻轉",fill_color:"填充顏色",fill_opacity:"填充不透明度",filter:"過濾器列表",fps_target:"FPS",fps_idle_target:"未對焦時 FPS",height:"高度",gcode_coords:"使用 GCode 坐標",icon:"圖示",invert_x_control:"反轉X軸控制",invert_y_control:"反轉Y軸控制",invert_z_control:"反轉Z軸控制",language:"顯示語言",last_result:"最後的結果",left_y:"左 Y 軸",line_color:"線條顏色",line_style:"線條樣式",min:"最小",max:"最大",metrics:"指標",move_line_width:"移動線寬",name:"名稱",none:"無",optional:"選項",power_toggle_in_top_nav:"頂部導航中的電源切換",primary_color:"主色调",printer_name:"打印機名稱",reset:"重置設定",retraction_icon_size:"回抽圖標大小",right_y:"右 Y 軸",show_animations:"顯示動畫",show_barometric_pressure:"顯示氣壓",show_code_lens:"顯示 CodeLens",show_gas_resistance:"顯示耐氣體性",show_legend:"顯示圖例",show_rate_of_change:"顯示溫度變化值",show_relative_humidity:"顯示相對濕度",show_save_config_and_restart:"頂部導航中的保存配置並重啟按鈕",show_upload_and_print:"在頂部導航中顯示上傳和打印按鈕",solid:"實線",starts_with:"起始字符",theme_preset:"預設主題",thermal_preset_gcode:"GCode",thermal_preset_name:"預設名稱",title:"標題",toolhead_move_distances:"擠出頭移動距離預設值",type:"類型",unit:"單位",z_adjust_values:"Z軸偏移量",date_format:"日期格式",time_format:"時間格式",text_sort_order:"文本排序",force_move_toggle_warning:"強制移動時是否需要確認",show_manual_probe_dialog_automatically:"自動顯示手動探測對話框",show_bed_screws_adjust_dialog_automatically:"自動顯示床身螺絲調整對話框"},timer_options:{duration:"僅顯示已用時間",filament:"通過耗材用量估算",file:"通過文件進度估算",slicer:"使用切片文件的時間"},title:{authentication:"安全認證",console:"控制台",camera:"攝像頭",file_editor:"文本編輯器",gcode_preview:"GCode 預覽",general:"常規",macros:"宏",theme:"主題",thermal_presets:"溫度預設",tool:"移動控制"},tooltip:{diagnostics_performance:"[BETA] 記錄診斷信息可能會影響性能",gcode_coords:"使用 GCode 坐標位置而不是儀表板上的打印頭坐標位置",show_manual_probe_dialog_automatically:"運行手動探測工具時自動顯示幫助對話框",show_bed_screws_adjust_dialog_automatically:"如果運行 BED_SCREWS_ADJUST 工具，自動顯示助手對話框"}},socket:{msg:{connecting:"正在連接至 Moonraker ...",no_connection:"沒有連接 Moonraker。請檢查 Moonraker 的狀態和/或刷新以重試。"}},system_info:{label:{capacity:"容量",cpu_desc:"CPU",distribution_codename:"開發代號",distribution_like:"基於發行版",distribution_name:"發行版",frequency:"頻率",hardware_desc:"硬件描述",hostname:"主機名",klipper_load:"Klipper 負載",manufactured:"生產日期",manufacturer:"制造商",mcu_awake:"{mcu} 喚醒時間",mcu_bandwidth:"{mcu} 帶寬占用",mcu_information:"{mcu}信息",mcu_load:"{mcu} 負載",micro_controller:"微控制器",model:"型號",moonraker_load:"Moonraker 負載",network:"網路",processor_desc:"處理器描述",product_name:"產品名稱",serial_number:"序列號",system_load:"系統負載",system_memory:"系統內存",system_utilization:"系統利用率",total_memory:"内存",operating_system:"操作系統",version:"版本",virtualization:"虛擬化"}},tool:{btn:{home_x:"歸位X",home_y:"歸位Y",home_all:"全部歸位"},title:{bed_screws_adjust:"底板螺絲調整",manual_probe:"手動探測"},tooltip:{absolute_positioning:"絕對位置",extruder_disabled:"擠出機操作已被禁用，低於 min_extrude_temp 設置的最低溫度 (%{min}<small>°C</small>)",home_xy:"歸位 XY",home_z:"歸位 Z",manual_probe:"手動探測",motors_off:"關閉電機",relative_positioning:"相對位置",tools:"工具"},label:{stats_active_extruder:"擠出機配置為耗材直徑 %{filamentDiameter}mm，噴嘴直徑 %{nozzleDiameter}mm",stats_volumetric_flow:"以 %{extrudeSpeed}mm/s 的速度，預估擠出耗材體積為 %{estimatedVolumetricFlow}mm³/s",stats_extruded_length:"以 %{extrudeFactor}% 流量挤出%{extrudeLength}mm 耗材，预估输出长度為 %{estimatedExtrudedLength}mm",stats_max_speed:"假設層高為 %{layerHeight} mm，預估的最大打印速度為 %{estimatedMaxSpeed} mm/s"}},version:{btn:{check_for_updates:"檢查更新",finish:"完成",update:"更新",update_all:"全部更新",view_versions:"查看版本"},label:{commit_history:"提交歷史",commits_on:"提交於",committed:"提交完成",dirty:"污染",invalid:"無效",os_packages:"系統組件",package_list:"軟件包列表",up_to_date:"最新",updates_available:"有可用更新"},status:{finished:"更新已完成",updating:"正在更新..."},title:"軟件更新",tooltip:{commit_history:"提交歷史",dirty:"本地文件被污染，無法從線上的 git 庫進行更新",invalid:"本地文件無效，無法從線上的 git 庫進行更新",packages:"軟件包",release_notes:"發行說明"}},timelapse:{btn:{render:"渲染",save_frames:"保存幀"},error:{newframe:"拍攝延時幀時出錯"},label:{frames:"%{frames} 幀 | %{frames} 幀",length:"預計長度：%{length}",frame:"相框 | 相框"},title:{timelapse_settings:"延時設置",timelapse_status:"延時狀態",render_settings:"渲染設置"},setting:{enable:"啟用",auto_render:"自動渲染",crf:"常數因子",duplicatelastframe:"重複最後一幀",fw_retract:"使用固件撤回",gcode_verbose:"詳細的 Gcode",mode:"模式",mode_layermacro:"圖層宏",mode_hyperlapse:"延時攝影",hyperlapse_cycle:"延時循環",output_framerate:"輸出幀率",park_retract_distance:"停靠時的回抽距離",park_retract_speed:"停靠時的回抽速度",park_extrude_distance:"停靠時的擠出長度",park_extrude_speed:"停靠時的擠出速度",parkhead:"停靠打印頭",park_time:"停靠時長",park_travel_speed:"停靠時的移動速度",park_custom_pos_x:"停靠位置 X",park_custom_pos_y:"停靠位置 Y",park_custom_pos_dz:"停靠位置 Z-Hop",parkpos:{label:"停靠位置",custom:"自定義",front_left:"左前",front_right:"右前",center:"中心",back_left:"左後",back_right:"右後",x_only:"僅移動 X",y_only:"僅移動 Y"},previewimage:"生成縮略圖",saveframes:"保存幀",stream_delay_compensation:"延遲補償",targetlength:"目標長度",variable_fps:"可變幀率",variable_fps_min:"最小幀率",variable_fps_max:"最大幀率"}}}};export{e as default};
