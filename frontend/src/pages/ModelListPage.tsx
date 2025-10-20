import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModels } from '@/hooks/useModels';
import { useConfirmDialog } from '@/hooks/useConfirmDialog';
import { useToast } from '@/hooks/useToast';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { ModelPreview } from '@/components/ModelPreview';
import { MobilePreviewModal } from '@/components/MobilePreviewModal';
import {
  PlusIcon,
  TrashIcon,
  PencilIcon,
  DevicePhoneMobileIcon,
  ClipboardIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import type { Model } from '@/generated/graphql';

export function ModelListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { models, isLoading, error, deleteModel, isDeleting } =
    useModels(searchQuery);
  const { isOpen, options, confirm, handleClose, handleConfirm } =
    useConfirmDialog();
  const { showSuccess, showError } = useToast();
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    model: Model | null;
  }>({ isOpen: false, model: null });

  const handleDelete = async (id: string) => {
    const confirmed = await confirm({
      title: '删除模型',
      message: '确定要删除这个模型吗？此操作不可撤销。',
      confirmText: '删除',
      cancelText: '取消',
      type: 'danger',
    });

    if (confirmed) {
      try {
        await deleteModel(id);
        showSuccess('模型删除成功');
      } catch (err) {
        console.error('Delete failed:', err);
        showError('删除失败，请稍后重试');
      }
    }
  };

  const handleMobilePreview = (model: Model) => {
    setPreviewModal({ isOpen: true, model });
  };

  const closeMobilePreview = () => {
    setPreviewModal({ isOpen: false, model: null });
  };

  const handleCopyUuid = async (uuid: string) => {
    try {
      await navigator.clipboard.writeText(uuid);
      showSuccess('UUID已复制到剪贴板');
    } catch (err) {
      console.error('复制失败:', err);
      showError('复制失败，请手动复制');
    }
  };

  const handleSearch = () => {
    setSearchQuery(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearchQuery('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        加载模型列表失败：{error.message}
      </div>
    );
  }

  return (
    <>
      <ConfirmDialog
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={options.title}
        message={options.message}
        confirmText={options.confirmText}
        cancelText={options.cancelText}
        type={options.type}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">模型管理</h1>
            <p className="mt-2 text-sm text-gray-700">
              管理您的 VR 模型，包括背景图片、视频和相关配置。
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link
              to="/dashboard/models/create"
              className="btn btn-primary px-2 py-2"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              创建模型
            </Link>
          </div>
        </div>

        {/* 搜索框 */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="按标题搜索模型..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleSearch} className="btn btn-primary p-2">
              搜索
            </button>
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="btn btn-secondary p-2"
              >
                清空
              </button>
            )}
          </div>
        </div>

        {/* 搜索结果提示 */}
        {searchQuery && (
          <div className="mt-4 text-sm text-gray-600">
            搜索关键词: "<span className="font-medium">{searchQuery}</span>"
            {models.length > 0 && (
              <span className="ml-2">找到 {models.length} 个结果</span>
            )}
          </div>
        )}

        <div className="mt-8">
          {models.length === 0 ? (
            <div className="text-center py-12">
              {searchQuery ? (
                <div>
                  <div className="text-gray-500 text-lg mb-4">
                    没有找到匹配 "{searchQuery}" 的模型
                  </div>
                  <button
                    onClick={handleClearSearch}
                    className="btn btn-secondary  p-2"
                  >
                    清空搜索
                  </button>
                </div>
              ) : (
                <div>
                  <div className="text-gray-500 text-lg mb-4">
                    还没有创建任何模型。
                  </div>
                  <Link
                    to="/dashboard/models/create"
                    className="btn btn-primary p-2"
                  >
                    <PlusIcon className="w-4 h-4 mr-2" />
                    创建第一个模型
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model: Model) => (
                <div
                  key={model.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group"
                >
                  {/* 模型预览区域 */}
                  <div className="relative h-48 bg-gray-50">
                    <ModelPreview
                      modelUrl={model.modelFile}
                      className="w-full h-full"
                      transparent={false}
                      cameraControls={true}
                      autoRotate={true}
                    />
                  </div>

                  {/* 模型信息 */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 truncate flex-1 mr-2">
                        {model.title}
                      </h3>
                      <div className="flex space-x-1">
                        {model.backgroundImage && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            图片
                          </span>
                        )}
                        {model.backgroundVideo && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            视频
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {model.description || '暂无描述'}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>UUID</span>
                        <button
                          onClick={() => handleCopyUuid(model.uuid)}
                          className="inline-flex items-center bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-xs font-mono transition-colors group/uuid"
                          title="点击复制UUID"
                        >
                          <span className="mr-1">{model.uuid}</span>
                          <ClipboardIcon className="w-3 h-3 opacity-0 group-hover/uuid:opacity-100 transition-opacity" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>创建时间</span>
                        <span>
                          {new Date(model.createdAt).toLocaleDateString(
                            'zh-CN',
                          )}
                        </span>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex space-x-2">
                        <Link
                          to={`/dashboard/models/${model.id}/edit`}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <PencilIcon className="w-4 h-4 mr-1" />
                          编辑
                        </Link>
                        <button
                          onClick={() => handleDelete(model.id)}
                          disabled={isDeleting}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                        >
                          <TrashIcon className="w-4 h-4 mr-1" />
                          删除
                        </button>
                      </div>
                      <button
                        onClick={() => handleMobilePreview(model)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <DevicePhoneMobileIcon className="w-4 h-4 mr-1" />
                        手机预览
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 手机预览模态框 */}
      <MobilePreviewModal
        isOpen={previewModal.isOpen}
        onClose={closeMobilePreview}
        modelUrl={previewModal.model?.modelFile}
        modelTitle={previewModal.model?.title || ''}
      />
    </>
  );
}
