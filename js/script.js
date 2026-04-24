// 登录页面切换
function initLoginTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 移除所有激活状态
                tabBtns.forEach(b => b.classList.remove('active'));
                // 添加当前激活状态
                btn.classList.add('active');
            });
        });
    }
}

// 登录功能
function initLoginForm() {
    const loginBtn = document.querySelector('.login-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
            
            if (username && password) {
                // 模拟登录成功
                window.location.href = 'pc_community.html';
            } else {
                alert('请输入账号和密码');
            }
        });
    }
}

// 生成页面类型切换
function initGenerateTypes() {
    const typeItems = document.querySelectorAll('.type-item');
    
    if (typeItems.length > 0) {
        typeItems.forEach(item => {
            item.addEventListener('click', () => {
                // 移除所有激活状态
                typeItems.forEach(i => i.classList.remove('active'));
                // 添加当前激活状态
                item.classList.add('active');
                
                const type = item.dataset.type;
                // 这里可以根据类型切换不同的参数设置
                console.log('切换到类型:', type);
            });
        });
    }
}

// 生成按钮点击
function initGenerateButton() {
    const generateBtn = document.querySelector('.generate-btn');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const prompt = document.querySelector('textarea').value;
            
            if (prompt) {
                // 模拟生成过程
                const previewArea = document.querySelector('.preview-placeholder');
                previewArea.innerHTML = '<div style="text-align: center;"><i class="fas fa-spinner fa-spin" style="font-size: 3rem; margin-bottom: 1rem;"></i><p>生成中...</p></div>';
                
                // 模拟生成完成
                setTimeout(() => {
                    previewArea.innerHTML = '<img src="https://via.placeholder.com/600x400" alt="生成结果" style="max-width: 100%; border-radius: 8px;">';
                }, 2000);
            } else {
                alert('请输入提示词');
            }
        });
    }
}

// 资产页面筛选
function initAssetFilters() {
    const filterSelect = document.querySelector('.filter-select');
    const sortSelect = document.querySelector('.sort-select');
    
    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            const value = filterSelect.value;
            console.log('筛选类型:', value);
            // 这里可以根据筛选类型过滤资产
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const value = sortSelect.value;
            console.log('排序方式:', value);
            // 这里可以根据排序方式排序资产
        });
    }
}

// 资产删除
function initAssetDelete() {
    const deleteBtns = document.querySelectorAll('.overlay-btn.delete');
    
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('确定要删除这个资产吗？')) {
                const assetCard = btn.closest('.asset-card');
                assetCard.remove();
            }
        });
    });
}

// 后台管理导航
function initAdminNav() {
    const navItems = document.querySelectorAll('.nav-item');
    
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // 移除所有激活状态
                navItems.forEach(i => i.classList.remove('active'));
                // 添加当前激活状态
                item.classList.add('active');
            });
        });
    }
}

// 社区内容交互
function initCommunityInteraction() {
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.querySelector('.fa-thumbs-up')) {
                // 点赞功能
                const count = btn.textContent.trim().split(' ')[1];
                if (count) {
                    btn.innerHTML = '<i class="fas fa-thumbs-up"></i> ' + (parseInt(count) + 1);
                }
            } else if (btn.querySelector('.fa-comment')) {
                // 评论功能
                alert('打开评论对话框');
            } else if (btn.querySelector('.fa-share')) {
                // 分享功能
                alert('分享功能');
            } else if (btn.querySelector('.fa-quote-right')) {
                // 引用功能
                alert('引用提示词');
            }
        });
    });
}

// 上传功能
function initFileUpload() {
    const fileUpload = document.getElementById('file-upload');
    
    if (fileUpload) {
        fileUpload.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                console.log('上传了', files.length, '个文件');
                // 这里可以处理文件上传预览
            }
        });
    }
}

// 分页功能
function initPagination() {
    const pageBtns = document.querySelectorAll('.page-btn:not(.disabled)');
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('disabled')) {
                // 移除所有激活状态
                document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
                // 添加当前激活状态
                btn.classList.add('active');
                
                const page = btn.textContent.trim();
                console.log('切换到页面:', page);
                // 这里可以处理分页逻辑
            }
        });
    });
}

// 搜索功能
function initSearch() {
    const searchBtns = document.querySelectorAll('.search-btn');
    
    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const searchInput = btn.previousElementSibling;
            if (searchInput && searchInput.tagName === 'INPUT') {
                const query = searchInput.value;
                console.log('搜索:', query);
                // 这里可以处理搜索逻辑
            }
        });
    });
}

// 批量操作
function initBatchActions() {
    const batchBtn = document.querySelector('.batch-btn');
    
    if (batchBtn) {
        batchBtn.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkboxes.length > 0) {
                alert('执行批量操作，选中了' + checkboxes.length + '个项目');
            } else {
                alert('请选择要操作的项目');
            }
        });
    }
}

// 动态对话框
function initDynamicChat() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollBottom = scrollHeight - scrollTop - clientHeight;
            
            // 当滚动到底部时，展开对话框
            if (scrollBottom < 100) {
                chatContainer.classList.add('expanded');
            } else {
                chatContainer.classList.remove('expanded');
            }
        });
    }
}

// 下拉菜单功能
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.control-dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', () => {
        const menus = document.querySelectorAll('.dropdown-menu');
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    });
    
    // 下拉菜单项点击
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = item.closest('.control-dropdown');
            const label = dropdown.querySelector('.control-label');
            if (label) {
                label.textContent = item.textContent;
            }
            
            // 移除所有激活状态
            const siblings = item.parentElement.querySelectorAll('.dropdown-item');
            siblings.forEach(sibling => {
                sibling.classList.remove('active');
            });
            
            // 添加当前激活状态
            item.classList.add('active');
            
            // 关闭下拉菜单
            const menu = item.closest('.dropdown-menu');
            menu.style.display = 'none';
        });
    });
}

// 比例和清晰度选择
function initRatioButtons() {
    const ratioBtns = document.querySelectorAll('.ratio-btn');
    ratioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有激活状态
            ratioBtns.forEach(b => b.classList.remove('active'));
            // 添加当前激活状态
            btn.classList.add('active');

            // 如果比例按钮在下拉菜单内，更新标签文本并关闭菜单
            const dropdown = btn.closest('.control-dropdown');
            if (dropdown) {
                const label = dropdown.querySelector('.control-label');
                if (label) {
                    label.textContent = btn.textContent;
                }
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.display = 'none';
                }
            }
        });
    });

    const resolutionBtns = document.querySelectorAll('.resolution-btn');
    resolutionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有激活状态
            resolutionBtns.forEach(b => b.classList.remove('active'));
            // 添加当前激活状态
            btn.classList.add('active');
        });
    });
}

// 分辨率选择器初始化（独立分辨率下拉）
function initResolutionSelector() {
    const selectors = document.querySelectorAll('.resolution-selector .control-dropdown');

    selectors.forEach(selector => {
        // 点击切换下拉菜单显示/隐藏（基础点击由 initDropdowns 覆盖，此处处理选项选中逻辑）
        const dropdownItems = selector.querySelectorAll('.resolution-dropdown .dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();

                // 更新 control-label 文本为选中项
                const label = selector.querySelector('.control-label');
                if (label) {
                    label.textContent = item.textContent;
                }

                // 切换 active 类
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // 关闭下拉菜单
                const menu = selector.querySelector('.resolution-dropdown');
                if (menu) {
                    menu.style.display = 'none';
                }
            });
        });
    });
}

// 数量选择器初始化
function initQuantitySelector() {
    const selectors = document.querySelectorAll('.quantity-selector .control-dropdown');

    selectors.forEach(selector => {
        // 点击切换下拉菜单显示/隐藏（基础点击由 initDropdowns 覆盖，此处处理数量选项选中逻辑）
        const qtyItems = selector.querySelectorAll('.quantity-dropdown .qty-item');
        qtyItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();

                // 更新 control-label（数字部分）文本为选中数字
                const label = selector.querySelector('.control-label');
                if (label) {
                    label.textContent = item.textContent;
                }

                // 切换 active 类到选中的 qty-item
                qtyItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // 关闭下拉菜单
                const menu = selector.querySelector('.quantity-dropdown');
                if (menu) {
                    menu.style.display = 'none';
                }
            });
        });
    });
}

// 生成按钮点击（新的生成页面）
function initNewGenerateButton() {
    const generateBtn = document.querySelector('.generate-btn');
    const chatInput = document.querySelector('.chat-input');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (generateBtn && chatInput && chatMessages) {
        generateBtn.addEventListener('click', () => {
            const prompt = chatInput.value;
            
            if (prompt) {
                // 添加用户消息
                const userMessage = document.createElement('div');
                userMessage.className = 'message message-user';
                userMessage.innerHTML = `
                    <div class="message-content">
                        <div class="message-text">${prompt}</div>
                    </div>
                `;
                chatMessages.appendChild(userMessage);
                
                // 清空输入框
                chatInput.value = '';
                
                // 添加机器人正在生成的消息
                const botMessage = document.createElement('div');
                botMessage.className = 'message message-bot';
                botMessage.innerHTML = `
                    <div class="message-content">
                        <div class="message-text">正在生成，请稍候...</div>
                        <div class="message-loading">
                            <i class="fas fa-spinner fa-spin"></i>
                        </div>
                    </div>
                `;
                chatMessages.appendChild(botMessage);
                
                // 滚动到底部
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // 模拟生成完成
                setTimeout(() => {
                    // 替换加载状态为生成结果
                    botMessage.innerHTML = `
                        <div class="message-content">
                            <div class="message-text">根据你的描述，我为你生成了以下图片：</div>
                            <div class="message-images">
                                <div class="image-item">
                                    <img src="https://via.placeholder.com/300x300" alt="生成的图片">
                                </div>
                                <div class="image-item">
                                    <img src="https://via.placeholder.com/300x300" alt="生成的图片">
                                </div>
                                <div class="image-item">
                                    <img src="https://via.placeholder.com/300x300" alt="生成的图片">
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // 滚动到底部
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 2000);
            } else {
                alert('请输入提示词');
            }
        });
    }
}

// 初始化所有功能
function initAll() {
    initLoginTabs();
    initLoginForm();
    initGenerateTypes();
    initGenerateButton();
    initNewGenerateButton();
    initAssetFilters();
    initAssetDelete();
    initAdminNav();
    initCommunityInteraction();
    initFileUpload();
    initPagination();
    initSearch();
    initBatchActions();
    initDynamicChat();
    initDropdowns();
    initRatioButtons();
    initResolutionSelector();
    initQuantitySelector();
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}